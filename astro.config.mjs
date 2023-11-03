import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  },

  markdown: {
    remarkPlugins: [remarkGfm],
  },
});
