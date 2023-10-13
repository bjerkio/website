<script lang="ts">
  import { MetaTags, type MetaTagsProps } from 'svelte-meta-tags';
  import type { Seo } from '../data/types';
  import dedent from 'dedent';
  import { urlFor } from '../data/sanity-client-browser';
  import type { Picture } from 'vite-imagetools';
  export let title: string | undefined = undefined;
  export let description: string | undefined = undefined;
  export let data: MetaTagsProps = {};
  export let seo: Seo | null = null;
  export let path: string | undefined = undefined;
  export let defaultImage = '/assets/bjerk-default-seo.png';
  export let image: string | Picture = seo?.image
    ? urlFor(seo.image.asset).size(1200, 630).url()
    : defaultImage;
  function isPicture(image: string | Picture): image is Picture {
    return typeof image !== 'string' && 'img' in image;
  }
  if (isPicture(image)) {
    image = image.img.src;
  }
  data.title = data.title ?? title;
  const defaultDescription = dedent`
    Bjerk er et dialogdrevet byrå innen digital produktutvikling og programvareutvikling. 
    De siste 12 årene har vi endret måten mennesker lærer, tenker, jobber, og kommuniserer
    innen eiendom, regnskap og forvaltning.
  `;
</script>

<MetaTags
  {...data}
  titleTemplate={data.title ? '%s – Bjerk' : 'Bjerk - Digitale produktutviklere'}
  description={seo?.description ?? description ?? data.description ?? defaultDescription}
  canonical={path ? new URL(path, 'https://bjerk.io').toString() : undefined}
  openGraph={{
    site_name: 'Bjerk',
    title: seo?.title ?? data.title ?? 'Bjerk',
    description: seo?.description ?? data.description ?? defaultDescription,
    images: [
      {
        url: image
      }
    ],
    ...(path ? { canonical: new URL(path, 'https://bjerk.io').toString() } : {})
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: seo?.title ?? data.title ?? 'Bjerk',
    description: seo?.description ?? data.description ?? defaultDescription,
    image: image
  }}
/>