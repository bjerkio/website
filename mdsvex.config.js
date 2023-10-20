import { defineMDSveXConfig as defineConfig } from 'mdsvex';

export const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  layout: {
    service: './src/layouts/service/layout.svelte'
  },

  smartypants: {
    dashes: 'oldschool'
  }
});
