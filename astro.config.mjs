import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://choule99.github.io',
  base: '/me',
  outDir: './docs',
  build: {
    assets: '_assets'
  }
});
