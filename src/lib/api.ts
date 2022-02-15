import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface Post {
  /** The slug as defined in the file name of the .md file */
  slug: string;
  /** The markdown content of the post */
  content?: string;
  /** Title of the psot */
  title?: string;
  /** Date of the post */
  date: string;
  /** Metadata for the post preview/SEO */
  meta?: { description?: string; image?: string };
  /** Banner image to show at top of article */
  image?: string;
  /** Array of string tags */
  tags?: string[];
}

const postsDirectory = join(process.cwd(), '/blog');

export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (
  slug: string,
  fields: (keyof Post)[] = [],
): Post => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: Post = { date: data['date'], slug: realSlug };

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllPosts = (fields: (keyof Post)[] = []): Post[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
