import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import Icons from 'unplugin-icons/vite';
import sitemap from '@astrojs/sitemap';
import remarkDirective from 'remark-directive';
import { remarkImageVariants } from './src/integrations/remark-image-variants';

// https://astro.build/config
export default defineConfig({
  site: 'https://bjerk.io',
  vite: {
    plugins: [Icons({ compiler: 'astro' })],
  },
  markdown: {
    remarkPlugins: [remarkGfm, remarkDirective, remarkImageVariants()],
    extendDefaultPlugins: true,
  },
  integrations: [sitemap()],
});
