import { format } from 'date-fns';
import { NextPage } from 'next';
import { Params } from 'next/dist/server/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Flex, Heading, Image, Text } from 'theme-ui';
import { Layout } from '../../components/layout/layout';
import { Post, getAllPosts, getPostBySlug } from '../../lib/api';
import { markdownToHtml } from '../../lib/markdown-to-html';

interface PostProps {
  post: Post & { content: string };
  paths: {
    params: {
      slug: string;
    };
  };
}

const BlogPost: NextPage<PostProps> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <Head>
        <title>{post.title} | Bjerk</title>
        <meta
          property="og:image"
          content={post?.meta?.image ? post.meta?.image : post.image}
        />
      </Head>
      <Layout>
        <Flex sx={{ flexDirection: 'column', gap: 2 }}>
          {post?.image && <Image src={post?.image} sx={{ borderRadius: 6 }} />}
          <Heading>{post.title}</Heading>
          <Text>{format(new Date(post.date), 'dd.MM.yyyy')}</Text>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Flex>
      </Layout>
    </>
  );
};

export default BlogPost;

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'meta',
    'content',
    'image',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
