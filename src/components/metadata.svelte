<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import dedent from 'dedent';
  import { urlFor } from '../data/sanity-client-browser';
  import type { Picture } from 'vite-imagetools';
  import type { Metadata } from '../data/types';

  export let data: Metadata = {
    title: null,
    searchEngine:{
      title: null,
      description: null
    },
    socialMedia: {
      title: null,
      description: null,
      images: [{
        url: null,
        alt: null
      }]
    }
  };
  export let path: string | undefined = undefined;

  export let defaultImage = '/assets/bjerk-default-seo.png';

  export let image: string = data.socialMedia.images[0]?.url ?
    urlFor(data.socialMedia.images[0].url).size(1200, 630).url()
    : defaultImage;

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
</script>

<MetaTags
  {...data}
  title={data.title ?? 'Bjerk'}
  description={ data.searchEngine.description ?? defaultDescription }
  canonical={path ? new URL(path, 'https://bjerk.io').toString() : undefined}
  openGraph={{
    siteName: 'Bjerk',
    title: data.searchEngine.title ?? 'Bjerk',
    description: data.searchEngine.description ?? defaultDescription,
    images: [
      {
        url: image
      }
    ],
    ...(path ? { canonical: new URL(path, 'https://bjerk.io').toString() } : {})
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: data.socialMedia.title ?? data.title ?? 'Bjerk',
    description: data.socialMedia.description ?? defaultDescription,
    image: image
  }}

/>
