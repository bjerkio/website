import { format } from 'date-fns';
import { Link } from 'next-theme-ui';
import Image from 'next/image';
import { Box, Card, Flex, Heading, Text } from 'theme-ui';
import { PostFields } from '../../lib/api';
import { imageLoader } from '../../lib/image-loader';
import { ImageWrapper } from '../image-wrapper';

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
              <ImageWrapper height={'100%'}>
                <Image
                  src={post.coverImage}
                  layout="fill"
                  loader={imageLoader}
                  unoptimized
                  height={2}
                  width={3}
                />
              </ImageWrapper>
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
