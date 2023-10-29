<script>
  /** @type {string} */
  export let title;

  /** @type {string} */
  export let description;

  /** @type {string|undefined} */
  export let headline;

  /** @type {string} */
  export let image;

  const imageData = import(image);
</script>
<main>
  <article>
    <h1>{headline ?? title}</h1>
    <slot />
  </article>
</main>

<style>
  main {
    width: min(50ch, 100% - 4rem);
    margin-inline: auto;
  }

  article > :global(*) {
    margin-block-end: 1rem;
  }

  article :global(img) {
    padding-bottom: 1rem;
  }
</style>
