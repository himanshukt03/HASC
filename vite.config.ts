import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Raise warning threshold — intentional splits keep individual chunks lean
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          // Split vendor libs into separate long-cached chunks.
          // React + router rarely change → long cache TTL on CDN.
          // motion (~90 kB gz) is isolated so it doesn't block initial
          //   parse on pages that don't use scroll animations.
          // lucide-react tree-shakes well but its own chunk means icon
          //   updates don't bust the React cache.
          manualChunks(id) {
            if (
              id.includes('/node_modules/react/') ||
              id.includes('/node_modules/react-dom/') ||
              id.includes('/node_modules/scheduler/')
            ) {
              return 'vendor-react';
            }
            if (
              id.includes('/node_modules/react-router') ||
              id.includes('/node_modules/@remix-run/')
            ) {
              return 'vendor-router';
            }
            if (
              id.includes('/node_modules/motion/') ||
              id.includes('/node_modules/framer-motion/')
            ) {
              return 'vendor-motion';
            }
            if (id.includes('/node_modules/lucide-react/')) {
              return 'vendor-icons';
            }
          },
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
