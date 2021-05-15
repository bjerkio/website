import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Box, Container, Grid, Heading, Text } from 'theme-ui';
import Layout from '../components/layouts';
import SEO from '../components/seo';
import { BlogQuery } from '../generated/graphql-types';

const Blog: React.FC<{ data: BlogQuery }> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Container variant="centered" sx={{ mb: 5 }}>
        <Grid columns="1fr 1fr" gap="2rem">
          {data.articles.nodes.map((article, i) => {
            const image = getImage(article.frontmatter.image as any);
            return (
              <Link to={`/blog/${article.slug}`} key={i}>
                <Box>
                  <Box sx={{ borderRadius: '1rem', overflow: 'hidden' }}>
                    <GatsbyImage
                      image={image}
                      alt={article.frontmatter.title}
                    />
                  </Box>
                  <Heading sx={{ my: 3, mb: 2 }}>
                    {article.frontmatter.title}
                  </Heading>
                  <Text>{article.excerpt}</Text>
                </Box>
              </Link>
            );
          })}
        </Grid>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query Blog {
    articles: allMdx(
      sort: { fields: [frontmatter___date] }
      filter: {
        frontmatter: { language: { eq: "en" } }
        fileAbsolutePath: { glob: "**/blog/**/*" }
      }
    ) {
      nodes {
        frontmatter {
          title
          date
          image {
            childImageSharp {
              gatsbyImageData(
                width: 1540
                height: 500
                placeholder: DOMINANT_COLOR
                transformOptions: { cropFocus: CENTER, fit: COVER }
                quality: 100
              )
            }
          }
        }
        slug
        excerpt
      }
    }
  }
`;

export default Blog;
