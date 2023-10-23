import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { rehypeMdsvexImageAutoimport } from 'rehype-mdsvex-image-autoimport';

export const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  layout: {
    service: './src/layouts/service/layout.svelte',
    _: './src/layouts/article/layout.svelte'
  },

  rehypePlugins: [rehypeMdsvexImageAutoimport],

  smartypants: {
    dashes: 'oldschool'
  }
});
