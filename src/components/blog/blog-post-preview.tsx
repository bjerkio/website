import { format } from 'date-fns';
import { Link } from 'next-theme-ui';
import { Box, Card, Flex, Heading, Image, Text } from 'theme-ui';
import { Post } from '../../lib/api';

export interface BlogPostPreviewProps {
  post: Pick<Post, 'title' | 'slug' | 'date' | 'meta' | 'image'>;
}

export const BlogPostPreview: React.FC<BlogPostPreviewProps> = ({ post }) => {
  return (
    <Link
      href={`posts/${post.slug}`}
      sx={{ textDecoration: 'none', color: 'text' }}
    >
      <Card>
        <Flex sx={{ gap: 3 }}>
          {post.image && (
            <Box
              sx={{
                flex: 1,
              }}
            >
              <Image src={post.image} />
            </Box>
          )}
          <Flex
            sx={{
              flexDirection: 'column',
              gap: 2,
              flex: 1,
            }}
          >
            <Text>{format(new Date(post.date), 'dd.MM.yyyy')}</Text>
            <Heading>{post.title}</Heading>

            <Text>{post.meta?.description}</Text>
          </Flex>
        </Flex>
      </Card>
    </Link>
  );
};
