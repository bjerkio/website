/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  trailingComma: "all",
  htmlWhitespaceSensitivity: "ignore",
  proseWrap: "always",
  arrowParens: "avoid",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
