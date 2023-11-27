# Bjerk Website

This is the source code for the official website of Bjerk, a digital product
agency. We create innovative solutions with a focus on communication skills,
humility, and empathy.

Website: https://bjerk.io/

## Project Structure

The project is built with Astro and TypeScript, and organized into several
directories:

- [`src/components`](src/components): This directory contains reusable Astro
  components for the website's UI.
- [`src/pages`](src/pages): This directory contains the individual pages of the
  website.
- [`src/__tests__`](src/__tests__): This directory contains unit tests for
  utility functions.
- [`src/content`](src/content): This directory contains the website's content in
  Markdown format (mainly).

There are some [shortcuts in tsconfig](./tsconfig.json). For reference, you can
use `@components` to import components, `@layouts` to import layouts, `@assets`
to import assets.

## Development

To start the development server, run:

```sh
pnpm dev
```

## Legacy

This website has been refactored many times, the latest legacy is based on
Svelte and available in the [legacy branch][legacy].

[legacy]: https://github.com/bjerkio/website/tree/legacy

## Contributing

We love contributions! Before submitting a Pull Request, it's always good to
start with a new issue first. Another good way to start is [searching in our
codebase for TODOs][todos].

[todos]:
  https://github.com/search?q=repo%3Abjerkio%2Fwebsite%20TODO%3A&type=code
