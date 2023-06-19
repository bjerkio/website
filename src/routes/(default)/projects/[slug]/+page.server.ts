import { error } from '@sveltejs/kit';
import { getProjects } from '../../../../data/projects/get-projects';
import { urlFor } from '../../../../data/sanity-client';
import type { EntryGenerator } from './$types.js';

const projects = await getProjects();

export const prerender = true;

export const entries = (() => {
	const urls = projects
		.filter((project) => project.preamble)
		.map((project) => ({
			slug: project.slug.current
		}));

	return urls;
}) satisfies EntryGenerator;

export const load = async ({ params }) => {
	const project = projects.find((project) => project.slug.current === params.slug);

	if (!project) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return {
		project: {
			...project,
			title: project.title ?? project.name,
			imageUrl: project.image ? urlFor(project.image.asset).url() : undefined,
			// TODO: Add imageAlt from Sanity
			imageAlt: project.name
		}
	};
};
