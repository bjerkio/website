<script lang="ts">
  import { ArrowCircleUpRight } from 'phosphor-svelte';
  import type { Project } from './+page.server';
  export let project: Project;
</script>

<div class="project">
  <div class="introduction">
    <div class="content">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </div>
    {#if project.slug}
      <a class="read-more-link" href="projects/{project.slug.current}">
        Les mer <ArrowCircleUpRight />
      </a>
    {/if}
  </div>
  <div class="metadata">
    <dl>
      <dd>Periode</dd>
      {#if project.yearTo}
        {#if project.yearFrom === project.yearTo}
          <dt>{project.yearFrom}</dt>
        {:else}
          <dt>{project.yearFrom} - {project.yearTo}</dt>
        {/if}
      {:else}
        <dt>{project.yearFrom} –</dt>
      {/if}
    </dl>
    <dl>
      <dd>Kunde</dd>
      <dt>{project.customer?.name}</dt>
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

      dt {
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
