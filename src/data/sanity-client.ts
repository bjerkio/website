import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: '1zkk2ha0',
	dataset: 'production',
	useCdn: false,
	token: process.env.SANITY_TOKEN,
	apiVersion: '2023-05-29'
});
