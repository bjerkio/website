<script lang="ts">
	import type { WithContext, Person } from 'schema-dts';
	import Metadata from '../../../components/metadata.svelte';

	export let givenName: string;
	export let familyName: string;
	export let position: string;
	export let phone: string;
	export let email: string;

	type socialMedia = {
		type: 'github' | 'linkedin';
		url: string;
	};

	export let socialMedia: socialMedia[] = [];
	export let image: string;

	const name = `${givenName} ${familyName}`;

	const person: WithContext<Person> = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		givenName,
		familyName,
		sameAs: socialMedia.map((media) => media.url),
		worksFor: [
			{
				'@type': 'EmployeeRole',
				name: position,
				worksFor: {
					'@type': 'LocalBusiness',
					name: 'Bjerk AS',
					sameAs: ['https://bjerk.io/']
				}
			}
		]
	};
</script>

<Metadata schema={person} />

<div class="employee">
	<div class="profile-image">
		<img src={image} alt={name} />
	</div>
	<div class="section">
		<div class="intro">
			<p class="name">{name}</p>
			<p class="position">{position}</p>
		</div>
		<div class="details">
			<p class="phone">{phone}</p>
			<p class="email">{email}</p>
		</div>
		{#if socialMedia.length > 0}
			<ul class="social-media-links">
				{#each socialMedia as link}
					{#if link.type == 'linkedin'}
						<li><a href={link.url} target="_blank" rel="noopener">LinkedIn</a></li>
					{/if}
					{#if link.type == 'github'}
						<li><a href={link.url} target="_blank" rel="noopener">GitHub</a></li>
					{/if}
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style lang="scss">
	.employee {
		display: flex;
		flex-direction: column;
		gap: var(--size-md);
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: var(--size-base);
	}

	.profile-image {
		height: 400px;
		width: 300px;
		img {
			object-fit: cover;
			height: 100%;
			width: 100%;
			border-radius: var(--border-radius-sm);
		}
	}

	.name {
		font-size: var(--font-size-md);
		font-weight: 500;
	}

	.social-media-links {
		display: flex;
		flex-direction: column;
		gap: var(--size-xs);
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			font-size: var(--font-size-sm);
		}
	}
</style>
