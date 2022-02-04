import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface PostFields {
  title?: string;
  excerpt?: string;
  date: string;
  slug: string;
  author?: { name: string; picture: string };
  content?: string;
  ogImage?: { url: string };
  coverImage?: string;
}

const postsDirectory = join(process.cwd(), 'src/_posts');

export const getPostSlugs = (): string[] => {
  return fs.readdirSync(postsDirectory);
};

export const getPostBySlug = (
  slug: string,
  fields: (keyof PostFields)[] = [],
): PostFields => {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items: PostFields = {};

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
    items['date'] = data['date'];
  });

  return items;
};

export const getAllPosts = (
  fields: (keyof PostFields)[] = [],
): PostFields[] => {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
};
