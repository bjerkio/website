import { z } from 'zod';

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

export const metadataModel = z.object({
  title: z.string().nullable().describe('The title of the page'),
  searchEngine: z.object({
    title: z
      .string()
      .nullable()
      .describe(
        'The title of the page in the search engine. the ideal length is 50-60 characters. Exceeding this length will result in the title being truncated in the search results.'
      ),
    description: z
      .string()
      .nullable()
      .describe(
        'The description of the page in the search engine. the ideal length is 70-155 characters. Exceeding this length will result in the description being truncated in the search results.'
      )
  }),
  socialMedia: z.object({
    title: z
      .string()
      .nullable()
      .describe(
        'The title of the page in social media. the ideal length is 47 characters. Exceeding this length will result in the title being truncated in the search results. Linkedin will truncate at 119 characters.'
      ),
    description: z
      .string()
      .nullable()
      .describe('Should not exceed 85 characters to fit most platforms.'),
    images: z
      .array(
        z
          .object({
            url: z.string().nullable(),
            alt: z.string().nullable()
          })
          .nullable()
      )
      .describe(
        'The ideal size is 1200x630px. When you are providing multiple images, the first image will be used as the main image. Some social media platforms will allow the user to choose which image to use.'
      )
  })
});
export type Metadata = z.infer<typeof metadataModel>;
