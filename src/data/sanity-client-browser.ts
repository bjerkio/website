import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder({
	projectId: '1zkk2ha0',
	dataset: 'production'
});

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: SanityImageSource) {
	return builder.image(source);
}
