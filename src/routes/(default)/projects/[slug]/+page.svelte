<script lang="ts">
  import InlineImage from '../../../../components/inline-image.svelte';
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';
	export let data: PageData;

	const { project } = data;
</script>

<div class="container introduction">
	<h1>{project.name}</h1>
	<div class="content">
		<div class="body">
			<PortableText value={project.preamble} />
			<div class="links">
				{#if project.links}
					{#each project.links as link}
						<a href={link.url}>{link.name} →</a>
					{/each}
				{/if}
			</div>
		</div>
		<div class="metadata">
			<dl>
				<dt>Teknologi</dt>
				<dd>
					<ul class="badges">
						{#if project.technologies}
							{#each project.technologies as technology}
								<li>{technology.name}</li>
							{/each}
						{/if}
					</ul>
				</dd>
			</dl>
			<dl>
				<dt>Oppdragsgiver / samarbeidspartner</dt>
				<dd>{project.customer?.name}</dd>
			</dl>
		</div>
	</div>
</div>

{#if project.image}
	<div class="hero">
		<img src={project.imageUrl} alt={project.imageAlt} />
	</div>
{/if}

{#if project.body}
	<div class="container story">
		<PortableText value={project.body} components={{
      types: {
        image: InlineImage,
      }
    }} />
	</div>
{/if}

<style lang="scss">
	.container,
	.introduction,
	.metadata,
	.body {
		display: flex;
		flex-direction: column;
		gap: var(--size-md);
	}

	h1 {
		max-width: 60ch;
	}

	.content {
		display: flex;
		flex-direction: row;
		gap: var(--size-md);

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
		gap: var(--size-base);

		dl {
			display: flex;
			flex-direction: column;
			gap: var(--size-xs);

			dt {
				font-weight: bold;

				dt {
					font-weight: normal;
				}
				dd {
					font-weight: normal;
				}
			}
		}
	}

	.badges {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: var(--size-sm);

		list-style: none;

		li {
			background-color: var(--blue20);
			padding: var(--size-xs) var(--size-sm);
			border-radius: var(--size-xs);
			color: var(--blue100);

			font-size: var(--font-size-sm);
		}
	}

	.links {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;

		gap: var(--size-base);

		a {
			color: var(--dark80);
			font-weight: 600;
		}
	}

	.hero {
		display: flex;
		justify-content: center;
		align-items: center;

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
