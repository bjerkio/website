<script lang="ts">
  import { ArrowCircleUpRight } from 'phosphor-svelte';
  import type { PageData } from './$types';
  export let project: PageData['projects'][0];
</script>

<div class="project">
  <div class="introduction">
    <div class="content">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
    {#if project.slug}
      <a class="read-more-link" href="projects/{project.slug}">
        Les mer <ArrowCircleUpRight />
      </a>
    {/if}
  </div>
  <div class="metadata">
    <dl>
      <dt>Periode</dt>
      {#if project.yearTo}
        {#if project.yearFrom === project.yearTo}
          <dd>{project.yearFrom}</dd>
        {:else}
          <dd>{project.yearFrom} - {project.yearTo}</dd>
        {/if}
      {:else}
        <dd>{project.yearFrom} –</dd>
      {/if}
    </dl>
    <dl>
      <dt>Kunde</dt>
      <dd>{project.customer?.name}</dd>
    </dl>
  </div>
</div>

<style lang="scss">
  @use '$styles/mixins';

  .project {
    padding: 2rem;
    border-radius: var(--border-radius-sm);
    background-color: var(--color-subtle-bg);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  .introduction {
    flex-grow: 3;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    .content {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .read-more-link {
      @include mixins.button;
      padding: 0.5rem 1rem;

      background-color: transparent;
      border: 1px solid var(--color-high-contrast-text);
      color: var(--color-high-contrast-text);
      &:hover {
        background-color: var(--color-ui-bg-hover);
        transform: none;
      }
    }
  }

  .metadata {
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    min-width: 30%;
    overflow: hidden;

    dl {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.25rem;

      dd {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 600px) {
    .project {
      flex-direction: column;
    }

    /* .metadata {
      flex-direction: row;
    } */
  }
</style>
