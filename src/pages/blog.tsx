import type { NextPage } from 'next';
import { Flex, Heading } from 'theme-ui';
import { BlogPostPreview } from '../components/blog/blog-post-preview';
import { Layout } from '../components/layout/layout';
import { PostFields, getAllPosts } from '../lib/api';

interface BlogProps {
  allPosts: PostFields[];
}

const Blog: NextPage<BlogProps> = ({ allPosts }: BlogProps) => {
  return (
    <Layout>
      <Flex sx={{ flexDirection: 'column', gap: 3 }}>
        <Heading>Blogginnlegg</Heading>
        <Flex sx={{ flexDirection: 'column', gap: 3 }}>
          {allPosts.map(post => (
            <BlogPostPreview post={post} key={post.slug} />
          ))}
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Blog;

export const getStaticProps = async (): Promise<{ props: BlogProps }> => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'ogImage',
  ]);

  return {
    props: { allPosts },
  };
};
