import {
  defineCollection,
  type ImageFunction,
  reference,
  z,
} from "astro:content";

const people = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      givenName: z.string(),
      familyName: z.string(),
      position: z.string(),
      phone: z.union([z.string(), z.array(z.string())]),
      email: z.string().email(),
      type: z
        .union([z.literal("employee"), z.literal("external-author")])
        .default("employee"),
      socialMedia: z.array(
        z.object({
          type: z.enum(["github", "linkedin", "matrix"]),
          url: z.string().url(),
        }),
      ),
      image: image().refine((img) => img.width >= 300, {
        message: "Cover image must be at least 1080 pixels wide!",
      }),
      imageAlt: z.string().optional(),
      photographerName: z.string().optional(),
      description: z.string().optional(),
    }),
});

const defaultFields = (image: ImageFunction) => ({
  image: image()
    .refine((img) => img.width >= 300, {
      message: "Cover image must be at least 1080 pixels wide!",
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
      image().refine((img) => img.width >= 300, {
        message: "Social media images must be at least 1080 pixels wide!",
      }),
    )
    .optional(), // Image type validation depends on your implementation
});

const services = z.enum([
  "accessiblity",
  "development",
  "integrations",
  "product-management",
  "technology-management",
  "ux",
]);

const project = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      ...defaultFields(image),
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
  type: "content",
  schema: ({ image }) =>
    z.object({
      ...defaultFields(image),
      date: z.date(),
      author: reference("people")
        .or(z.array(reference("people")))
        .optional(),
      sameAs: z.array(z.string().url()).optional(),
    }),
});

/**
 * @url https://schema.org/Offer
 */
const eventOffer = z.object({
  url: z.string(),
  price: z.string(),
  priceCurrency: z.string().default("NOK"),
  availability: z.enum([
    "https://schema.org/InStock",
    "https://schema.org/SoldOut",
    "https://schema.org/PreOrder",
    "https://schema.org/AvailableForPurchase",
    "https://schema.org/OutOfStock",
    "https://schema.org/Discontinued",
  ]),
  validFrom: z.string().optional(),
  validThrough: z.string().optional(),
});

/**
 * @url https://schema.org/Organization
 */
const eventOrganization = (image: ImageFunction) =>
  z.object({
    type: z.literal("Organization"),
    name: z.string(),
    url: z.string(),
    logo: image().optional(),
  });

/**
 * @url https://schema.org/Person
 */
const eventPerson = (image: ImageFunction) =>
  z.object({
    type: z.literal("Person"),
    name: z.string(),
    url: z.string(),
    jobTitle: z.string().optional(),
    image: image().optional(),
  });

/**
 * @url https://schema.org/performer
 */
const eventPerformer = (image: ImageFunction) =>
  z.union([eventOrganization(image), eventPerson(image)]);

const event = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      ...defaultFields(image),
      startDate: z.date(),
      endDate: z.date(),
      eventAttendanceMode: z
        .enum([
          "https://schema.org/OnlineEventAttendanceMode",
          "https://schema.org/OfflineEventAttendanceMode",
          "https://schema.org/MixedEventAttendanceMode",
        ])
        .default("https://schema.org/OnlineEventAttendanceMode"),
      eventStatus: z
        .enum([
          "https://schema.org/EventScheduled",
          "https://schema.org/EventCancelled",
          "https://schema.org/EventMovedOnline",
          "https://schema.org/EventPostponed",
          "https://schema.org/EventRescheduled",
          "https://schema.org/EventLive",
        ])
        .default("https://schema.org/EventScheduled"),
      location: z
        .object({
          name: z.string(),
          address: z.object({
            streetAddress: z.string(),
            addressLocality: z.string(),
            postalCode: z.string(),
            addressCountry: z.string(),
          }),
        })
        .default({
          name: "Bjerk",
          address: {
            streetAddress: "Akersgata 51",
            addressLocality: "Oslo",
            postalCode: "0180",
            addressCountry: "NO",
          },
        }),
      offers: z.array(eventOffer).default([]),
      performer: z
        .array(eventPerformer(image))
        .nonempty()
        .default([
          {
            type: "Organization",
            name: "Bjerk",
            url: "https://bjerk.io",
          },
        ]),
    }),
});

export const partner = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      name: z.string().optional(),
      url: z.string().url().optional(),
    }),
});

export const collections = {
  project,
  people,
  post,
  event,
  partner,
};
