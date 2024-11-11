import { defineConfig } from "astro/config";
import remarkGfm from "remark-gfm";
import Icons from "unplugin-icons/vite";
import sitemap from "@astrojs/sitemap";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://bjerk.io",
  vite: {
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },
  markdown: {
    remarkPlugins: [remarkGfm],
  },
  integrations: [sitemap(), alpinejs()],
});
