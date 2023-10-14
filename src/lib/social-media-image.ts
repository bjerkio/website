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

