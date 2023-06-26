<script>
	import Footer from '$components/footer.svelte';
	import Header from '$components/header.svelte';
	import Metadata from '$components/metadata.svelte';
	import Feature from './feature.svelte';
	import Hero from './hero.svelte';
</script>

<Metadata path="/" />

<div class="homepage-container">
	<div class="container">
		<Header />
		<Hero />
	</div>
</div>
<Feature />
<Footer />

<style>
	.homepage-container {
		background-color: var(--hero-background-color);

		background-image: url('/assets/speckled.svg');
		background-size: 400px;
		background-repeat: no-repeat;
		background-position: right 80%;
	}

	@media (prefers-color-scheme: dark) {
		.homepage-container {
			background-image: url('/assets/speckled-dark.svg');
		}
	}

	@media (max-width: 1060px) {
		.homepage-container {
			background-image: none;
		}
	}
</style>
