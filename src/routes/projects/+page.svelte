<script lang="ts">
  import Metadata from '$components/metadata.svelte';
  import type { PageData } from './$types';
  import ProjectItem from './project-item.svelte';
  export let data: PageData;
</script>

<Metadata
  title="Prosjekter"
  description="
    Se et utvalg av prosjekter vi har jobbet. Siden 2009 har
    vi endret hvordan folk tenker, arbeider, kommuniserer og
    jobber gjennom å skape digitale produkter."
  path="/projects"
/>

<main class="container projects">
  <h1>Våre prosjekter</h1>
  <p>
    Siden 2009 har vi endret hvordan folk tenker, arbeider, kommuniserer og jobber gjennom å skape
    digitale produkter. Her er et utvalg av våre prosjekter.
  </p>
  {#each data.projects as project}
    <ProjectItem {project} />
  {/each}
</main>

<style>
  .projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  p {
    max-width: 50ch;
    margin-bottom: 1rem;
  }
</style>
