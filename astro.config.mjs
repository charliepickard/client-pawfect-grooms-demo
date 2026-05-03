import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import config from './src/config.json';

// https://astro.build/config
export default defineConfig({
  site: config.seo.siteUrl,
  integrations: [
    tailwind({
      // We provide our own minimal global.css; let Tailwind generate utilities.
      applyBaseStyles: true,
    }),
    sitemap(),
  ],
  output: 'static',
});
