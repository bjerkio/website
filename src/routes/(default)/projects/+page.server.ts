import { getProjects } from '../../../data/projects/get-projects';

export const prerender = true;

export const load = async () => {
	const projects = await getProjects();
	return { projects };
};
