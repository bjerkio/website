<script>
	import Metadata from '$components/metadata.svelte';
	import Feature from './feature.svelte';
	import Hero from './hero.svelte';
</script>

<Metadata path="/" />

<div class="container">	
	<Hero />
	<Feature />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;

		gap: var(--size-lg);
	}
</style>
