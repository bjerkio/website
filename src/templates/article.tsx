import { graphql } from 'gatsby';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Box, Container, Heading, Link } from 'theme-ui';
import Layout from '../components/layouts';
import SEO from '../components/seo';
import { ArticleQuery } from '../generated/graphql-types';

const Article: React.FC<{ data: ArticleQuery }> = ({ data }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.article.frontmatter.title,
    keywords: (data.article.frontmatter.tags || []).join(' '),
    wordcount: data.article.wordCount,
    datePublished: data.article.frontmatter.date,
    description: data.article.frontmatter.meta.description,
    publisher: {
      '@type': 'Organization',
      name: 'Bjerk',
      logo: 'https://bjerk.io/images/logo.svg',
    },
    url: 'https://bjerk.io',
  };
  const seoImage = getSrc(
    (data.article.frontmatter.meta.image as any) ||
      (data.article.frontmatter.image as any),
  );
  const headingImage = getImage(data.article.frontmatter.image as any);
  return (
    <Layout>
      <SEO
        title={data.article.frontmatter.title}
        description={data.article.frontmatter.meta.description}
        image={seoImage}
        schema={schema}
      />
      <Container variant="centered">
        <Box sx={{ borderRadius: '1rem', overflow: 'hidden' }}>
          <GatsbyImage
            image={headingImage}
            alt={data.article.frontmatter.title}
          />
        </Box>
      </Container>
      <Container variant="centered" sx={{ maxWidth: '940px', mb: 5 }}>
        <Heading as="h1" sx={{ fontSize: [5, 7], mb: [3, 4], mt: [4, 5] }}>
          {data.article.frontmatter.title}
        </Heading>
        <Box>
          <MDXRenderer title={data.article.frontmatter.title}>
            {data.article.body}
          </MDXRenderer>
        </Box>
      </Container>
      <Container variant="centered" sx={{ maxWidth: '940px', mb: 6 }}>
        <Box sx={{ bg: 'lighter', p: 4 }}>
          <strong>We ❤️ Open Source:</strong> This website is released under
          Apache 2.0 license. Find{' '}
          <Link href="https://github.com/bjerkio/website">
            the source code for this website on Github
          </Link>{' '}
          or{' '}
          <Link
            href={`https://github.com/bjerkio/website/blob/main/src/blog/${data.file.relativePath}`}
          >
            edit this article
          </Link>
          .
        </Box>
      </Container>
    </Layout>
  );
};

export const pageQuery = graphql`
  query Article(
    $slug: String!
    $date: Date!
    $lang: String!
    $fileAbsolutePath: String
  ) {
    article: mdx(
      slug: { eq: $slug }
      frontmatter: { date: { eq: $date }, language: { eq: $lang } }
    ) {
      id
      body
      timeToRead
      fileAbsolutePath
      wordCount {
        words
      }
      frontmatter {
        title
        date
        meta {
          description
          image {
            childImageSharp {
              gatsbyImageData(width: 1200, formats: [JPG])
            }
          }
        }
        tags
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1540
              height: 500
              jpgOptions: { quality: 100 }
              pngOptions: { quality: 100 }
              placeholder: DOMINANT_COLOR
              transformOptions: { cropFocus: CENTER, fit: COVER }
              quality: 100
            )
          }
        }
      }
    }
    file(absolutePath: { eq: $fileAbsolutePath }) {
      relativePath
    }
  }
`;

export default Article;
