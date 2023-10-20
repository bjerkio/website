import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { config as mdsvexConfig } from './mdsvex.config.js';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    mdsvex(mdsvexConfig), //
    vitePreprocess()
  ],

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),

    alias: {
      $assets: './src/assets',
      $components: './src/components',
      $styles: './src/styles',
      $data: './src/data',
      $lib: './src/lib'
    }

    // csp: {
    // 	directives: {
    // 		'script-src': ['self']
    // 	},
    // 	reportOnly: {
    // 		'script-src': ['self']
    // 	}
    // }
  }
};

export default config;
