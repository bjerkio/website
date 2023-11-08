import { defineCollection, reference, z } from 'astro:content';

const people = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      givenName: z.string(),
      familyName: z.string(),
      position: z.string(),
      phone: z.string(),
      email: z.string().email(),
      type: z
        .union([z.literal('employee'), z.literal('external-author')])
        .default('employee'),
      socialMedia: z.array(
        z.object({
          type: z.enum(['github', 'linkedin']),
          url: z.string().url(),
        }),
      ),
      image: image().refine(img => img.width >= 300, {
        message: 'Cover image must be at least 1080 pixels wide!',
      }),
      imageAlt: z.string().optional(),
      photographerName: z.string().optional(),
      description: z.string().optional(),
    }),
});

const services = z.enum([
  'accessiblity',
  'development',
  'integrations',
  'product-management',
  'technology-management',
  'ux',
]);

const project = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      image: image()
        .refine(img => img.width >= 300, {
          message: 'Cover image must be at least 1080 pixels wide!',
        })
        .optional(), // Image type validation depends on your implementation
      title: z.string(),
      description: z.string(),
      headline: z.string().optional(),
      socialMediaTitle: z
        .string()
        .describe(
          `
            The title for social media platforms.
            The ideal length is approximately 47 characters.
            
            When exceeding this limit, platforms will truncate the title.
            LinkedIn will truncate the title at 119 characters.
         `,
        )
        .optional(),
      socialMediaDescription: z.string().optional(),
      socialMediaImages: z
        .array(
          image().refine(img => img.width >= 300, {
            message: 'Social media images must be at least 1080 pixels wide!',
          }),
        )
        .optional(), // Image type validation depends on your implementation
      customer: z.string().min(1), // Assuming reference to organization is a string identifier
      dateFrom: z.date(),
      dateTo: z.date().optional(),
      mission: z.string().optional(),
      technologies: z.array(z.string()).optional(), // Assuming technology references are string identifiers
      categories: z.array(services).optional(),
      links: z
        .array(
          z.object({
            name: z.string(),
            url: z.string().url(),
          }),
        )
        .optional(), // Link type validation depends on your implementation
    }),
});

const post = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      headline: z.string().optional(),
      image: image()
        .refine(img => img.width >= 300, {
          message: 'Cover image must be at least 1080 pixels wide!',
        })
        .optional(),
      socialMediaTitle: z
        .string()
        .describe(
          `
            The title for social media platforms.
            The ideal length is approximately 47 characters.
            
            When exceeding this limit, platforms will truncate the title.
            LinkedIn will truncate the title at 119 characters.
         `,
        )
        .optional(),
      socialMediaDescription: z.string().optional(),
      socialMediaImages: z
        .array(
          image().refine(img => img.width >= 300, {
            message: 'Social media images must be at least 1080 pixels wide!',
          }),
        )
        .optional(),
      date: z.date(),
      author: reference('people')
        .or(z.array(reference('people')))
        .optional(),
      sameAs: z.array(z.string().url()).optional(),
    }),
});

export const collections = {
  project,
  people,
  post,
};
