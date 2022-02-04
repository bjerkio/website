import { format } from 'date-fns';
import { Image, Link } from 'next-theme-ui';
import { Box, Card, Flex, Heading, Text } from 'theme-ui';
import { PostFields } from '../../lib/api';

export interface BlogPostPreviewProps {
  post: Pick<
    PostFields,
    'title' | 'slug' | 'date' | 'excerpt' | 'author' | 'coverImage'
  >;
}

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post }) => {
  return (
    <Link
      href={`posts/${post.slug}`}
      sx={{ textDecoration: 'none', color: 'text' }}
    >
      <Card>
        <Flex sx={{ gap: 3 }}>
          {post.coverImage && (
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Image
                src={post.coverImage}
                sx={{ height: '100%', width: '100%' }}
              />
            </Box>
          )}
          <Flex
            sx={{
              flexDirection: 'column',
              gap: 2,
              flex: 1,
            }}
          >
            <Heading>{post.title}</Heading>

            <Text>{`${format(new Date(post.date), 'dd.MM.yyyy')} – ${
              post.author?.name
            }`}</Text>

            <Text>{post.excerpt}</Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
};
