<script lang="ts">
	import { MetaTags, type MetaTagsProps } from 'svelte-meta-tags';
	import type { Seo } from '../data/types';
	import dedent from 'dedent';
	import { urlFor } from '../data/sanity-client-browser';

	export let title: string | undefined = undefined;
	export let data: MetaTagsProps = {};
	export let seo: Seo | null = null;

	export let defaultImage = '/assets/bjerk-default-seo.png';

	export let image: string = seo?.image
		? urlFor(seo.image.asset).size(1200, 630).url()
		: defaultImage;

	data.title = data.title ?? title;
	const defaultDescription = dedent`
    Bjerk er et digitalt byrå som hjelper bedrifter med å utvikle digitale produkter og tjenester.
  `;
</script>

<MetaTags
	{...data}
	titleTemplate={data.title ? '%s – Bjerk' : 'Bjerk - Digitale produktutviklere'}
	description={seo?.description ?? data.description ?? defaultDescription}
	openGraph={{
		site_name: 'Bjerk',
		title: seo?.title ?? data.title ?? 'Bjerk',
		description: seo?.description ?? data.description ?? defaultDescription,
		images: [
			{
				url: image
			}
		]
	}}
	twitter={{
		cardType: 'summary_large_image',
		title: seo?.title ?? data.title ?? 'Bjerk',
		description: seo?.description ?? data.description ?? defaultDescription,
		image: image
	}}
/>
