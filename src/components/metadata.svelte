<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import { parseSocialMediaImage, type SocialMediaMetaData } from '$lib/social-media';

  const defaultDescription = `
  Bjerk er et dialogdrevet byrå innen digital produktutvikling og programvareutvikling. 
  De siste 12 årene har vi endret måten mennesker lærer, tenker, jobber, og kommuniserer
  innen eiendom, regnskap og forvaltning.
  `;

  const defaultTitle = 'Bjerk';

  const socialMediaDefaults: SocialMediaMetaData = {
    title: defaultTitle,
    description: defaultDescription,
    images: []
  };

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

  export let socialMedia: Partial<SocialMediaMetaData> = socialMediaDefaults;

  /**
   * Used to generate the canonical URL.
   */
  export let path: string = '/';

  const images = socialMedia.images.map((image) => parseSocialMediaImage(image));
  const [image] = images;
  const canonical = new URL(path, 'https://bjerk.io').toString();
</script>

<MetaTags
  {title}
  {description}
  {canonical}
  openGraph={{
    site_name: 'Bjerk',
    title: socialMedia.title,
    description: socialMedia.description,
    images: images.map((image) => ({
      url: image
    }))
  }}
  twitter={{
    cardType: 'summary_large_image',
    title: socialMedia?.title ?? 'Bjerk',
    description: socialMedia?.description,
    image
  }}
/>
