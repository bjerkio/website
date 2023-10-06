<script lang="ts">
  import InlineImage from '$components/inline-image.svelte';
  import type { PageData } from './$types';
  import { PortableText } from '@portabletext/svelte';
  import Metadata from '$components/metadata.svelte';
  export let data: PageData;

  const { project } = data;
</script>

<Metadata
  title={project.name}
  description={project.description}
  seo={project.seo}
  path={`/projects/${project.slug?.current}`}
  defaultImage={`https://bjerk.io/assets/graph/${project.slug?.current}.png`}
/>

<div class="container introduction">
  <h1>{project.title ?? project.name}</h1>
  <div class="content">
    <div class="body">
      {#if project.preamble}
        <PortableText value={project.preamble} />
      {/if}
      <div class="links">
        {#if project.links}
          {#each project.links as link}
            <a href={link.url}>{link.name} →</a>
          {/each}
        {/if}
      </div>
    </div>
    <dl class="metadata">
      <div>
        {#if project.technologies}
          <dt>Teknologi</dt>
          <dd>
            <ul class="badges">
              {#each project.technologies as technology}
                <li>{technology.name}</li>
              {/each}
            </ul>
          </dd>
        {/if}
      </div>
      <div>
        <dt>Oppdragsgiver / samarbeidspartner</dt>
        <dd>{project.customer?.name}</dd>
      </div>
    </dl>
  </div>
</div>

{#if project.image}
  <div class="hero">
    <img src={project.imageUrl} alt={project.imageAlt} />
  </div>
{/if}

{#if project.body}
  <div class="container story">
    <PortableText
      value={project.body}
      components={{
        types: {
          image: InlineImage
        }
      }}
    />
  </div>
{/if}

<style lang="scss">
  .container,
  .introduction,
  .metadata,
  .body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-wrap: pretty;
  }

  h1 {
    max-width: 60ch;
  }

  .content {
    display: flex;
    flex-direction: row;
    gap: 2rem;

    .body {
      max-width: 50ch;
      font-size: var(--font-size-base);
    }
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
    }
  }

  .metadata {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      dt {
        font-weight: bold;
      }
      dd {
        font-weight: normal;
      }
    }
  }

  .badges {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;

    list-style: none;

    li {
      background-color: var(--color-ui-bg);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      color: var(--color-low-contrast-text);

      font-size: var(--font-size-sm);
    }
  }

  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 1rem;

    a {
      color: inherit;
      font-weight: 600;
    }
  }

  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-block: 2rem;

    img {
      width: 100%;
      max-width: 1200px;
      height: 100%;
      max-height: 600px;
      object-fit: cover;
    }
  }

  .story {
    max-width: 60ch;
  }
</style>
