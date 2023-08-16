<script lang="ts">
	import type { Picture } from '../types';

	export let src: Picture | string;
	export let alt = '';

	export let draggable = false;
	export let decoding: 'async' | 'sync' | 'auto' = 'async';
	export let loading: 'lazy' | 'eager' = 'lazy';

	if (typeof src === 'string') {
		throw new Error('src must be of type Picture');
	}

	const picture: Picture = src;

	let classes = '';
	export { classes as class };
</script>

<picture>
	{#each Object.entries(picture.sources) as [format, images = []]}
		<source srcset={images.map((i) => `${i.src} ${i.w}w`).join(', ')} type={'image/' + format} />
	{/each}

	<img
		src={picture.img.src}
		{alt}
		class={classes}
		{loading}
		{decoding}
		{draggable}
		width={picture.img.w}
		height={picture.img.h}
	/>
</picture>
