<script>
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';
	import { isBjerkDeveloper } from '../stores';
	import Feature from './feature.svelte';
	import Hero from './hero.svelte';

	let isBjerkDeveloperValue = false;

	isBjerkDeveloper.subscribe((value) => {
		isBjerkDeveloperValue = value;
	});

	function handleClick() {
		isBjerkDeveloper.update((value) => !value);
	}
</script>

<div class="homepage-container">
	<div class="container">
		<button on:click={handleClick}>hallo {isBjerkDeveloperValue}</button>
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
