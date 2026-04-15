import { defineConfig, passthroughImageService } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import remarkReadingTime from "remark-reading-time";

export default defineConfig({
  image: {
    service: passthroughImageService(),
  },
  site: "https://bisrepetita.ch",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/styleguide"),
    }),
    mdx(),
    icon(),
  ],
  markdown: {
    remarkPlugins: [
      remarkReadingTime,
      () => {
        return function (tree, file) {
          file.data.astro.frontmatter.minutesRead =
            file.data.readingTime.minutes;
        };
      },
    ],
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
