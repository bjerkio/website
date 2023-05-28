import { z } from 'zod';
import { client } from '../../../data/sanity-client';

export const prerender = true;

const query = `
  *[
    _type == "project" &&
    !(_id in path("drafts.**"))
  ] | order(yearFrom desc) {
    _type,
    name,
    description,
    customer->{
      name,
      privacy {
        hideName,
        anonymizedName
      },
      sameAs
    },
    yearFrom,
    yearTo,
    technologies[]->{
      name
    },
    links[]{
      _type, name, target, url
    }
  }
`;

const privacy = z.object({
	hideName: z.boolean(),
	anonymizedName: z.string().nullable()
});

const customer = z.object({
	name: z.string(),
	privacy: privacy.nullable(),
	sameAs: z.array(z.string()).nullable()
});

const model = z.object({
	_type: z.literal('project'),
	name: z.string(),
	description: z.string(),
	customer: customer.nullable(),
	yearFrom: z.number(),
	yearTo: z.number().nullable(),
	links: z
		.array(
			z.object({
				_type: z.literal('link'),
				name: z.string(),
				target: z.string(),
				url: z.string()
			})
		)
		.nullable()
});

export type Project = z.infer<typeof model>;

export const load = async () => {
	const dataFromSanity = await client.fetch(query);
	const projects = z
		.array(model)
		.parse(dataFromSanity)
		.map((project) => {
			const customer = project.customer?.privacy?.hideName
				? {
						...project.customer,
						name: project.customer?.privacy?.anonymizedName ?? 'Anonymt'
				  }
				: project.customer;

			return {
				...project,
				customer
			};
		});

	return { projects };
};
