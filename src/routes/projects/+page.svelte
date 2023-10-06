<script lang="ts">
  import Metadata from '$components/metadata.svelte';
  import type { PageData } from './$types';
  import ProjectItem from './project-item.svelte';
  export let data: PageData;
</script>

<Metadata title="Prosjekter" path="/projects" />

<div class="container projects">
  {#each data.projects as project}
    <ProjectItem {project} />
  {/each}
</div>

<style>
  .projects {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
