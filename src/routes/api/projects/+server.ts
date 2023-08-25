import { json } from '@sveltejs/kit';
import { getProjects } from '$data/projects/get-projects';

export const prerender = true;

export const GET = async () => {
  const client = await getProjects();
  return json(client);
};
