import { z } from 'zod';
import type { Picture } from '../types';

export const seoModel = z.object({
  title: z.string().nullable(),
  description: z.string().nullable(),
  image: z
    .object({
      asset: z.object({
        _ref: z.string()
      })
    })
    .nullable(),
  keywords: z.string().nullable()
});

export type Seo = z.infer<typeof seoModel>;

export interface Metadata {
  /**
   * The ideal length for a title is approx. 60 characters.
   * When exceeding this limit, search engines will truncate the title.
   */
  title?: string;
  /**
   * The ideal length is between 70 and 155 characters.
   * Minium length is 70 characters.
   * When exceeding this limit, search engines will truncate the description.
   */
  description?: string;
  /**
   * Fields are used by search engines to index your site.
   */
  searchEngine?: SearchEngineMetadata;

  /**
   * Fields are used by social media platforms to display your site.
   */
  socialMedia?: SocialMediaMetaData;
}

export interface SearchEngineMetadata {
  /**
   * The ideal length for a title is approx. 60 characters.
   * When exceeding this limit, search engines will truncate the title.
   */
  title: string;

  /**
   * The ideal length is between 70 and 155 characters.
   * Minium length is 70 characters.
   * When exceeding this limit, search engines will truncate the description.
   */
  description: string;
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
  images: Picture[];
}
