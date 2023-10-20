<script>
  import { ArrowDownRight } from 'phosphor-svelte';
  import { JsonLd } from 'svelte-meta-tags';

  /** @type {string} */
  export let headline;
  /** @type {string} */
  export let path;
</script>

<JsonLd
  schema={{
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Bjerk',
        item: 'https://bjerk.io/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Bjerk',
        item: new URL('/services', 'https://bjerk.io').toString()
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: headline,
        item: new URL(path, 'https://bjerk.io').toString()
      }
    ]
  }}
/>

<!-- breadcrumps -->
<nav aria-label="navigasjon" class="container breadcrumb">
  <ol>
    <li><a href="/about">Bjerk</a></li>
    <li><a href="/services">Tjenester</a></li>
    <li>{headline} <ArrowDownRight size="1.25em" /></li>
  </ol>
</nav>

<style lang="scss">
  .breadcrumb ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-block: 1.5rem;
  }

  .breadcrumb ol > li {
    font-size: clamp(0.7rem, 1.5vw, 1rem);

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    &::after {
      content: '/';
      margin: 0 0.5em;
    }

    &:last-child {
      display: flex;
      align-items: center;
      gap: 0.2em;

      &::after {
        content: '';
      }
    }
  }
</style>
