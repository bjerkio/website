<script lang="ts">
	import type { WithContext, LocalBusiness } from 'schema-dts';
	import Metadata from '../components/metadata.svelte';

	const localBusiness: WithContext<LocalBusiness> = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		name: 'Bjerk AS',
		url: 'https://bjerk.io/',
		logo: 'https://bjerk.io/assets/logo.svg',
		image: 'https://bjerk.io/assets/logo.svg',
		telephone: '+47 95308087',
		email: 'office@bjerk.io',
		taxID: '930 334 693',
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'Akersgata 51',
			addressLocality: 'Oslo',
			addressRegion: 'Oslo',
			postalCode: '0180',
			addressCountry: 'NO'
		}
	};
</script>

<Metadata schema={localBusiness} />

<slot>
	<!-- +page.svelte is rendered here -->
</slot>

<style lang="scss">
	@use '../styles/globals.scss';
</style>
