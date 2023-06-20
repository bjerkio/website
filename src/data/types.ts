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
