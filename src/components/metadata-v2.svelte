<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import dedent from 'dedent';
  import type { Metadata, SearchEngineMetadata, SocialMediaMetaData } from '../data/types';
  import type { Picture } from '../types';

  export let data: Metadata = {
    searchEngine: undefined,
    socialMedia: undefined
  };
  export let searchEngine: SearchEngineMetadata | undefined = undefined;
  export let socialMedia: SocialMediaMetaData | undefined = undefined;
  export let path: string | undefined = undefined;
  export let image: string = socialMedia?.images?.[0].img.src ?? '/images/bjerk-logo.png';

  function isPicture(image: string | Picture): image is Picture {
    return typeof image !== 'string' && 'img' in image;
  }
  if (isPicture(image)) {
    image = image.img.src;
  }
  const defaultDescription = dedent`
  Bjerk er et dialogdrevet byrå innen digital produktutvikling og programvareutvikling. 
  De siste 12 årene har vi endret måten mennesker lærer, tenker, jobber, og kommuniserer
  innen eiendom, regnskap og forvaltning.
  `;
  data.searchEngine = data.searchEngine ?? searchEngine;
  data.socialMedia = data.socialMedia ?? socialMedia;
</script>

<MetaTags
  {...data}
  title={data?.title ?? 'Bjerk'}
  description={data?.description ?? defaultDescription}
  canonical={path ? new URL(path, 'https://bjerk.io').toString() : undefined}
  openGraph={{
    siteName: 'Bjerk',
    title: data.searchEngine?.title ?? 'Bjerk',
    description: data.searchEngine?.description ?? defaultDescription,
    images: [
      {
        url: image
      }
    ],
    ...(path ? { canonical: new URL(path, 'https://bjerk.io').toString() } : {})
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: data.socialMedia?.title ?? 'Bjerk',
    description: data.socialMedia?.description ?? defaultDescription,
    image: image
  }}
/>
