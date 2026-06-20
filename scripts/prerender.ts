/**
 * Post-build prerender (Approach A).
 *
 * After `vite build`, this boots a static server over `dist/`, drives a headless
 * Chromium through every public route (derived from the generated sitemap), lets
 * the React app render fully — including the runtime <SEO> meta injection — and
 * writes the resulting HTML to `dist/<route>/index.html`.
 *
 * The result: crawlers and AI engines that don't execute JavaScript receive real,
 * route-specific HTML and meta tags instead of the empty SPA shell. The client app
 * still boots normally on top of the prerendered markup.
 */
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import type { Browser } from 'puppeteer-core';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const PORT = 4178;
const BASE = `http://localhost:${PORT}`;

/**
 * Launch Chromium for whichever environment we're in.
 * - On Vercel/Lambda: puppeteer-core + @sparticuz/chromium (a Chromium build that
 *   ships the shared libraries the build container lacks — fixes libnspr4.so errors).
 * - Locally: full puppeteer with its bundled Chromium (works on macOS/Windows/Linux).
 */
async function launchBrowser(): Promise<Browser> {
  const isServerless =
    !!process.env.VERCEL ||
    !!process.env.AWS_LAMBDA_FUNCTION_VERSION ||
    !!process.env.AWS_EXECUTION_ENV;

  if (isServerless) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteerCore = (await import('puppeteer-core')).default;
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const puppeteer = (await import('puppeteer')).default;
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  }) as unknown as Browser;
}

/**
 * Inline the main CSS bundle into dist/index.html so it no longer render-blocks.
 *
 * Vite emits the entry stylesheet as a synchronous `<link rel="stylesheet">` in the
 * <head>, which blocks first paint. The whole bundle is small (~70KB / ~11KB gzip),
 * so inlining it into a <style> tag removes the blocking network round-trip entirely
 * with no flash of unstyled content. We do this before prerendering boots, so every
 * captured route inherits the inlined styles automatically.
 */
function inlineEntryCss(): void {
  const indexPath = join(DIST, 'index.html');
  let html = readFileSync(indexPath, 'utf-8');

  html = html.replace(
    /<link\b[^>]*\bhref="(\/assets\/[^"]+\.css)"[^>]*>/g,
    (tag, href: string) => {
      // Only inline render-blocking stylesheet links (skip preload/prefetch/icon).
      if (!/rel="stylesheet"/.test(tag)) return tag;
      try {
        const css = readFileSync(join(DIST, href.replace(/^\//, '')), 'utf-8');
        return `<style>${css}</style>`;
      } catch {
        return tag; // leave the link if the file can't be read
      }
    },
  );

  writeFileSync(indexPath, html, 'utf-8');
  console.log('[prerender] inlined entry CSS into dist/index.html');
}

/** Pull the route list straight from the built sitemap — single source of truth. */
function getRoutes(): string[] {
  const xml = readFileSync(join(DIST, 'sitemap.xml'), 'utf-8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const paths = locs.map((u) => new URL(u).pathname.replace(/\/+$/, '') || '/');
  return Array.from(new Set(['/', ...paths]));
}

async function main() {
  // Inline the entry CSS first so every prerendered route picks it up.
  inlineEntryCss();

  const routes = getRoutes();
  console.log(`[prerender] ${routes.length} routes from sitemap`);

  // Static server with SPA fallback so unbuilt routes render client-side.
  const app = express();
  app.use(express.static(DIST));
  app.get('*', (_req, res) => res.sendFile(join(DIST, 'index.html')));
  const server = app.listen(PORT);

  const browser = await launchBrowser();

  let ok = 0;
  let homeOk = false;

  try {
    for (const route of routes) {
      const page = await browser.newPage();
      try {
        // Capture the desktop layout consistently across environments.
        await page.setViewport({ width: 1366, height: 900 });
        // Block third-party requests (fonts, GA, Unsplash) for fast, deterministic idle.
        await page.setRequestInterception(true);
        page.on('request', (req) => {
          if (req.url().startsWith(BASE)) req.continue();
          else req.abort();
        });

        await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
        // Wait for real content (skeleton -> page) and let entrance animations settle.
        await page.waitForSelector('h1', { timeout: 15000 }).catch(() => {});
        await new Promise((r) => setTimeout(r, 600));

        // Scroll through the full page to trigger all `whileInView` (once:true) entrance
        // animations, so the captured HTML reflects the final, fully-visible state rather
        // than elements frozen at opacity:0.
        await page.evaluate(async () => {
          const step = window.innerHeight;
          for (let y = 0; y <= document.body.scrollHeight; y += step) {
            window.scrollTo(0, y);
            await new Promise((r) => setTimeout(r, 150));
          }
          window.scrollTo(0, 0);
        });
        await new Promise((r) => setTimeout(r, 800));

        const html = await page.content();
        const outPath = route === '/' ? join(DIST, 'index.html') : join(DIST, route, 'index.html');
        mkdirSync(dirname(outPath), { recursive: true });
        writeFileSync(outPath, html, 'utf-8');

        ok++;
        if (route === '/') homeOk = true;
        console.log(`[prerender] ✓ ${route}`);
      } catch (err) {
        console.warn(`[prerender] ✗ ${route} — ${(err as Error).message}`);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(`[prerender] done: ${ok}/${routes.length} routes`);
  // Fail the build only if we couldn't even render the homepage — that signals a
  // real breakage, whereas an odd sub-route still falls back to the working SPA shell.
  if (!homeOk) {
    console.error('[prerender] homepage failed to render — failing build');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[prerender] fatal:', err);
  process.exit(1);
});
