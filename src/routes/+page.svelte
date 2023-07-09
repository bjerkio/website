<script>
	import Footer from '$components/footer.svelte';
	import Header from '$components/header.svelte';
	import Metadata from '$components/metadata.svelte';
	import Feature from './feature.svelte';
	import Hero from './hero.svelte';
</script>

<Metadata path="/" />

<div class="container">
	<Header />
	<Hero />
	<Feature />
</div>

<Footer />

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;

		gap: var(--size-lg);
	}
</style>
