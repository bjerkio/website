<script lang="ts">
	import type { PageData } from './$types';
	import ProjectItem from './project-item.svelte';
	export let data: PageData;

	console.log({ data });
</script>

<div class="container projects">
	{#each data.projects as project}
		<ProjectItem {project} />
	{/each}
</div>

<style>
	.projects {
		display: flex;
		flex-direction: column;
		gap: var(--size-base);
	}
</style>
