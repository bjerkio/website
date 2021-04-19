/** @jsx jsx */
import { MDXProvider } from '@mdx-js/react';
import {
  Box,
  Container,
  Heading as BaseHeading,
  Image,
} from '@theme-ui/components';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { jsx } from 'theme-ui';
import { Layout } from '../components/layouts';
import { ProjectQuery } from '../generated/graphql-types';

const TwoCenteredImages = ({ key, firstSrc, secondSrc }) => (
  <div style={{ textAlign: 'center' }}>
    <Image
      src={`../projects/${key}/${firstSrc}`}
      sx={{
        width: '45%',
        marginRight: '0.5%',
      }}
    />
    <Image
      src={`../projects/${key}/${secondSrc}`}
      sx={{
        width: '45%',
        marginLeft: '0.5%',
      }}
    />
  </div>
);

const Heading2 = ({ children, withQuotes, ...props }) => (
  <BaseHeading
    as="h2"
    sx={{
      mt: 4,
      mb: 5,
      fontSize: 'clamp(20px, 2.5vw, 35px)',
      fontWeight: 'normal',
      marginLeft: '15%',
      marginRight: '15%',
    }}
    {...props}
  >
    {withQuotes && (
      <a
        style={{
          position: 'absolute',
          left: 'calc(23vw - 50px)',
          marginTop: '-20px',
          height: 'auto',
          textDecoration: 'none',
          fontSize: 'clamp(70px, 7vw, 100px)',
          color: '#4ecca3',
        }}
      >
        “
      </a>
    )}
    {children}
  </BaseHeading>
);

const Text = ({ children }) => (
  <BaseHeading
    as="h2"
    sx={{
      mt: 5,
      mb: 5,
      fontWeight: 'normal',
      marginLeft: '15%',
      marginRight: '15%',
      fontSize: 'clamp(20px, 2.5vw, 35px)',
    }}
  >
    {children}
  </BaseHeading>
);

const components = {
  h2: Heading2,
  p: Text,
  TwoCenteredImages,
};

export const ProjectTemplate: React.FC<{ data: ProjectQuery }> = ({ data }) => {
  const { project } = data;
  const img = getImage(project.frontmatter.image as any);
  return (
    <Layout>
      <Container variant="centered">
        <BaseHeading
          as="h1"
          sx={{
            mb: 3,
            fontWeight: '600',
            mt: [2, 2, 6],
            fontSize: 'clamp(36px, 3.5vw, 50px)',
          }}
        >
          {project.frontmatter.title}
        </BaseHeading>
        {img && (
          <Box sx={{ mt: 4 }}>
            <GatsbyImage
              image={img}
              alt={project.frontmatter.title}
              sx={{ width: '100%' }}
            />
          </Box>
        )}
        <MDXProvider components={components}>
          <Box>
            <MDXRenderer>{project.body}</MDXRenderer>
          </Box>
        </MDXProvider>
      </Container>
    </Layout>
  );
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query Project($slug: String!, $lang: String!) {
    project: mdx(
      frontmatter: { slug: { eq: $slug }, language: { eq: $lang } }
    ) {
      id
      body
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(
              width: 1540
              height: 800
              jpgOptions: { quality: 100 }
              pngOptions: { quality: 100 }
              transformOptions: { cropFocus: CENTER, fit: COVER }
              quality: 100
            )
          }
        }
      }
    }
  }
`;
