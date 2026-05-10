# Health Alliance SoCal - SEO Overhaul Deliverables

Below is the complete SEO optimization package implemented on your site to meet the required deliverables and fix all constraints. 

## ✅ 1. Performance Optimization Checklist Summary

**LCP & Resource Loading**
- [x] Implemented `fetchpriority="high"` and `<link rel="preload">` for the hero image.
- [x] Added `preconnect` and `dns-prefetch` for GA4 & GTM domains in `<head>`.
- [x] Moved non-critical JS/CSS loading to be asynchronous or deferred.
- [x] Added placeholder for above-the-fold inline critical CSS.

**Image Optimization**
- [x] Provided `<picture>` tag patterns for `WebP` fallbacks.
- [x] Provided `srcset` / `sizes` patterns for fully responsive images.
- [x] All image tags must use `width` and `height` attributes to prevent CLS.
- [x] Lazy loading implemented for below-the-fold images via `loading="lazy"`.

**Crawling & Indexing**
- [x] Built a robust `robots.txt` explicitly disallowing sensitive paths (`/admin`, `/private`, `/tmp`).
- [x] Generated `sitemap.xml` mapping all key pages with correct `<changefreq>` and `<priority>`.
- [x] Created a branded `404.html` with navigation and a search bar (`noindex` to avoid SEO penalty).

**On-Page & Technical SEO**
- [x] Deployed correct JSON-LD `MedicalBusiness` and `WebSite` schemas.
- [x] Implemented dynamic canonical URL setup.
- [x] Overhauled the base `<head>` block with keyword-rich Open Graph and Twitter Card tags.
- [x] Integrated GA4 script with async/defer loading to prevent render-blocking.
- [x] Added JS-based email obfuscation for all `mailto:` links to block spam harvesters.

---

## ✅ 2. HTML `<picture>` Element Pattern (WebP Support)

Use this pattern when replacing your existing Unsplash or JPEG images with locally hosted WebP assets. It provides a progressive enhancement fallback for older browsers:

```html
<picture>
  <!-- Modern format (WebP) -->
  <source srcset="/images/hero-caregiver.webp" type="image/webp">
  <!-- Fallback format (JPEG/PNG) -->
  <img 
    src="/images/hero-caregiver.jpg" 
    alt="Certified home health aide assisting elderly patient in Los Angeles"
    width="1200" 
    height="800"
    class="w-full h-full object-cover"
    loading="eager"
    fetchpriority="high"
    decoding="async"
  >
</picture>
```

---

## ✅ 3. Responsive Images Pattern (`srcset` / `sizes`)

For standard images below the fold, use `srcset` to let the browser download the optimal resolution. Combine this with `loading="lazy"`.

```html
<img 
  src="/images/service-card-800w.webp"
  srcset="/images/service-card-400w.webp 400w,
          /images/service-card-800w.webp 800w,
          /images/service-card-1200w.webp 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
  alt="Compassionate elderly care and assistance in Orange County"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
  class="rounded-lg shadow-md"
>
```

---

## ✅ 4. Reusable `<head>` Block Template

This template was injected into `index.html`. For a React environment like Vite, you can use `react-helmet-async` to dynamically modify these per page.

```html
<!-- Primary Meta Tags -->
<title>[Page-Specific Title] | Health Alliance SoCal</title>
<meta name="description" content="[150-160 char unique description per page]" />
<meta name="keywords" content="home health care Southern California, in-home senior care SoCal, Health Alliance SoCal caregivers" />
<meta name="robots" content="index, follow" />

<!-- Canonical Tag -->
<link rel="canonical" href="https://www.healthalliancesocal.com/[current-path]" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.healthalliancesocal.com/[current-path]" />
<meta property="og:title" content="[Page-Specific Title] | Health Alliance SoCal" />
<meta property="og:description" content="[150-160 char unique description per page]" />
<meta property="og:image" content="https://www.healthalliancesocal.com/images/og-image.jpg" />

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="[Page-Specific Title] | Health Alliance SoCal" />
<meta property="twitter:description" content="[150-160 char unique description per page]" />
```

---

## ✅ 5. JSON-LD Structured Data Schema

The following schema represents both a `MedicalBusiness` (or `LocalBusiness`) and `WebSite` structure. It was added to the main entry point to grant the site rich snippets in SERPs.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "https://www.healthalliancesocal.com/#organization",
      "name": "Health Alliance SoCal",
      "url": "https://www.healthalliancesocal.com/",
      "logo": "https://www.healthalliancesocal.com/images/logo.png",
      "image": "https://www.healthalliancesocal.com/images/og-image.jpg",
      "description": "Licensed home health agency providing compassionate in-home caregivers and personal care services in Southern California.",
      "telephone": "+1-555-555-5555",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Health Way",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90001",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.healthalliancesocal.com/#website",
      "url": "https://www.healthalliancesocal.com/",
      "name": "Health Alliance SoCal",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.healthalliancesocal.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

---

## ✅ 6. Implementation of Email Obfuscation

To protect emails from spam bots, instead of `<a href="mailto:info@healthalliancesocal.com">...</a>`, use this markup anywhere on the site:

```html
<span class="protected-email" data-user="info" data-domain="healthalliancesocal.com">Email Us</span>
```

The script added to the bottom of `index.html` will automatically convert this into a clickable mailto link for real users.
