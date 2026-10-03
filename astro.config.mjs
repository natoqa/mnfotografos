// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mnfotografos.com', // ← reemplazar por el dominio real (también en src/data/site.ts)
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
