import { urlFor } from '$data/sanity-client-browser';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { Picture } from 'vite-imagetools';

export type SocialMediaImage = SanityImageSource | Picture | string;

function isPicture(image: string | Picture): image is Picture {
  return typeof image !== 'string' && 'img' in image;
}

function isSanityImageSource(image: string | SanityImageSource): image is SanityImageSource {
  return typeof image !== 'string' && 'asset' in image;
}

export function parseSocialMediaImage(image: SocialMediaImage): string {
  if (isSanityImageSource(image)) {
    return urlFor(image).size(1200, 630).url();
  }

  if (isPicture(image)) {
    return image.img.src;
  }

  return image;
}

export interface SocialMediaMetaData {
  /**
   * The ideal length for a title is approx. 47 characters.
   * When exceeding this limit, platforms will truncate the title.
   *
   * LinkedIn will truncate the title at 119 characters.
   */
  title: string;

  /**
   * Should not exceed 85 characters to fit most platforms.
   */
  description: string;

  /**
   * The ideal size is 1200 x 630 pixels.
   * When you are providing more than one image, the first image will be used, but some
   * platforms will allow the user to choose which image to use.
   */
  images: SocialMediaImage[];
}
