<script>
  import Metadata from '$components/metadata.svelte';
  import Breadcrumb from './breadcrumb.svelte';

  /** @type {string} */
  export let title;

  /** @type {string} */
  export let headline;

  /** @type {string} */
  export let slug;

  export let description = `
    Bjerk samler folk med kompetanse innen programvareutvikling, brukeropplevelse og
    produktledelse for å gjøre verden til et litt bedre sted. Vi håper at gjennom å lage digitale
    produkter, så kan vi skape positive effekter for mennesker.
  `;

  const path = `/services/${slug}`;
</script>

<Metadata {path} {title} {description} />

<Breadcrumb {headline} {path} />

<main>
  <h1>{headline}</h1>

  <div class="content">
    <slot />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: var(--container-width);
    margin-inline: auto;
    gap: 2em;
  }

  @media (max-width: 920px) {
    main {
      flex-direction: column;
    }
  }

  a {
    text-decoration: underline;
  }

  main > .content {
    width: min(50ch, 100% - 4rem);
  }

  main > .content > :global(*) {
    margin-block-end: 1em;
    line-height: 1.5em;
  }

  main > .content > .headline {
    font-size: var(--font-size-md);
    font-weight: 600;
    text-wrap: pretty;
    margin-block-end: 1.5em;
  }

  main > .content nav > ul li {
    margin-block-end: 0.5em;
    list-style: none;
  }

  main > .content nav > ul li::before {
    content: '→';
    margin-inline-end: 0.5em;
    margin-inline-start: 0.2em;
  }

  main > .content nav > ul li a {
    text-decoration: none;
  }

  main > .content nav > ul li a:hover {
    text-decoration: underline;
  }

  h2 {
    font-size: clamp(1.5rem, 2vw, 2rem);
  }
</style>
