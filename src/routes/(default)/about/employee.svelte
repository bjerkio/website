<script lang="ts">
	import type { WithContext, Person } from 'schema-dts';
	import GitHubLogo from 'phosphor-svelte/lib/GitHubLogo';
	import LinkedInLogo from 'phosphor-svelte/lib/LinkedInLogo';
	import Metadata from '$components/metadata.svelte';
	import Image from '$components/image.svelte';

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
  // TODO: Use Picture type from components/image.svelte
	export let image: any;

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
	<Image src={image} class="profile-image" alt={name} />
	<div class="section">
		<div class="intro">
			<p class="name">{name}</p>
			<p class="position">{position}</p>
		</div>
		<div class="details">
			<p class="phone"><a href={`tel:${phone}`}>{phone}</a></p>
			<p class="email"><a href={`mailto:${email}`}>{email}</a></p>
		</div>
		{#if socialMedia.length > 0}
			<ul class="social-media-links">
				{#each socialMedia as link}
					{#if link.type == 'linkedin'}
						<li><a href={link.url} target="_blank" rel="noopener"><LinkedInLogo /></a></li>
					{/if}
					{#if link.type == 'github'}
						<li><a href={link.url} target="_blank" rel="noopener"><GitHubLogo /></a></li>
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
		gap: var(--size-base);
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: var(--size-base);
	}

	:global(.profile-image) {
		border-radius: var(--border-radius-sm);
		width: 100%;
		height: 100%;
	}

	.intro {
		min-height: 70px;

		.name {
			font-size: var(--font-size-base);
			font-weight: 600;
		}

		.position {
			color: var(--dark60);
		}
	}

	.details {
		font-size: var(--font-size-sm);

		a {
			color: var(--dark80);
		}
	}

	.social-media-links {
		display: flex;
		flex-direction: row;
		gap: var(--size-xs);
		list-style: none;
		padding: 0;
		margin: 0;
		li {
			font-size: var(--font-size-md);
			a {
				color: var(--dark80);
			}
		}
	}
</style>
