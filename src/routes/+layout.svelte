<script lang="ts">
	import Chatwoot from '$components/chatwoot.svelte';
	import Footer from '$components/footer.svelte';
	import Header from '$components/header.svelte';
	import { JsonLd } from 'svelte-meta-tags';
</script>

<JsonLd
	schema={{
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
	}}
/>

<Chatwoot />

<Header />

<slot>
	<!-- +page.svelte is rendered here -->
</slot>

<Footer />

<style lang="scss">
	@use '../styles/globals.scss';
</style>
