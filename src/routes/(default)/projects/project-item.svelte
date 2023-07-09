<script lang="ts">
	import type { Project } from './+page.server';
	export let project: Project;
</script>

<div class="project">
	<div class="introduction">
		<h2>{project.name}</h2>
		<p>{project.description}</p>
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
	.project {
    /* border: 2px solid var(--color-ui-border); */
		padding: var(--size-md);
		border-radius: var(--border-radius-sm);
    background-color: var(--color-subtle-bg);

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		gap: var(--size-base);
    /* &:hover {
      background-color: var(--color-ui-bg-hover);
    }
    &:focus, &:active {
      background-color: var(--color-ui-bg-active);
    } */
	}

	.introduction {
		flex-grow: 3;

		display: flex;
		flex-direction: column;
		gap: var(--size-sm);
	}

	.metadata {
		flex-grow: 1;

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--size-base);
		min-width: 30%;
		overflow: hidden;

		dl {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			gap: var(--size-xs);

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
