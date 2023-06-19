import { z } from 'zod';
import { client } from '../sanity-client';
import { projectModel, type Project } from './types';

const query = `
  *[
    _type == "project" &&
    !(_id in path("drafts.**"))
  ] | order(yearFrom desc) {
    _id,
    _type,
    name,
    title,
    description,
    preamble,
    mission,
    image,
    body,
    slug,
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

export async function getProjects(): Promise<Project[]> {
	const dataFromSanity = await client.fetch(query);
	const projects = z
		.array(projectModel)
		.parse(dataFromSanity)
		.map((project) => {
			const customer = project.customer?.privacy?.hideName
				? {
						...project.customer,
						name: project.customer?.privacy?.anonymizedName ?? 'Anonym'
				  }
				: project.customer;

			return {
				...project,
				customer
			};
		});

	return projects;
}
