<script>
	import Image from '$components/image.svelte';
	import backgroundImage from '$assets/k8-G8dlL6UEt_I-unsplash.jpg?w=1200&h=565&fit=crop&fm=webp&q=80';
</script>

<Image src={backgroundImage} class="feature-image" />

<style lang="scss">
	@use '$styles/mixins.scss';
	:global(.feature-image) {
		object-fit: cover;
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
</style>
