import { z } from 'zod';
import { seoModel } from '../types';

export const privacyModel = z.object({
	hideName: z.boolean(),
	anonymizedName: z.string().nullable()
});

export const customerModel = z.object({
	name: z.string(),
	privacy: privacyModel.nullable(),
	sameAs: z.array(z.string()).nullable()
});

export const projectModel = z.object({
	_type: z.literal('project'),
	name: z.string(),
	title: z.string().nullable(),
	preamble: z.any().nullable(),
	mission: z.string().nullable(),
	image: z
		.object({
			asset: z.object({
				_ref: z.string()
			})
		})
		.nullable(),
	body: z.any().nullable(),
	description: z.string(),
	customer: customerModel.nullable(),
	yearFrom: z.number(),
	yearTo: z.number().nullable(),
	slug: z.object({
		current: z.string()
	}),
	technologies: z
		.array(
			z.object({
				name: z.string()
			})
		)
		.nullable(),
	links: z
		.array(
			z.object({
				_type: z.literal('link'),
				name: z.string(),
				target: z.string(),
				url: z.string()
			})
		)
		.nullable(),
	seo: seoModel.nullable()
});

export type Project = z.infer<typeof projectModel>;
