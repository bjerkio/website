<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import { parseSocialMediaImage, type SocialMediaImage } from '$lib/social-media-image';
  import { parseMetaText } from '$lib/parse-meta-text';

  const defaultDescription = `
  Bjerk er et dialogdrevet byrå innen digital produktutvikling og programvareutvikling. 
  De siste 12 årene har vi endret måten mennesker lærer, tenker, jobber, og kommuniserer
  innen eiendom, regnskap og forvaltning.
  `;

  const defaultTitle = 'Bjerk';

  /**
   * The ideal length for a title is approx. 60 characters.
   * When exceeding this limit, search engines will truncate the title.
   */
  export let title: string = defaultTitle;

  /**
   * The ideal length is between 70 and 155 characters.
   * Minium length is 70 characters.
   * When exceeding this limit, search engines will truncate the description.
   */
  export let description: string = defaultDescription;

  /**
   * The ideal length for a title is approx. 47 characters.
   * When exceeding this limit, platforms will truncate the title.
   *
   * LinkedIn will truncate the title at 119 characters.
   */
  export let socialMediaTitle = title ?? defaultTitle;

  /**
   * Should not exceed 85 characters to fit most platforms.
   */
  export let socialMediaDescription = description ?? defaultDescription;

  /**
   * The ideal size is 1200 x 630 pixels.
   * When you are providing more than one image, the first image will be used, but some
   * platforms will allow the user to choose which image to use.
   */
  export let images: SocialMediaImage[] = [];

  /**
   * Used to generate the canonical URL.
   */
  export let path: string = '/';

  const parsedImages = images.map((image) => parseSocialMediaImage(image));
  const [image] = parsedImages;

  const canonical = new URL(path, 'https://bjerk.io').toString();
</script>

<MetaTags
  title={parseMetaText(title)}
  description={parseMetaText(description)}
  {canonical}
  openGraph={{
    type: 'website',
    siteName: 'Bjerk',
    title: parseMetaText(socialMediaTitle),
    description: parseMetaText(socialMediaDescription),
    images: parsedImages.map((image) => ({
      url: image
    }))
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: parseMetaText(socialMediaTitle),
    description: parseMetaText(socialMediaDescription),
    image
  }}
/>
