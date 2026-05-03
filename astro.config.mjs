import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://pawfect-grooms-demo.netlify.app',
  integrations: [
    tailwind({
      // We provide our own minimal global.css; let Tailwind generate utilities.
      applyBaseStyles: true,
    }),
    sitemap(),
  ],
  output: 'static',
});
