import { MDXProvider } from '@mdx-js/react';
import { Heading as BaseHeading, Box, Image } from '@theme-ui/components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

const TwoCenteredImages = ({ firstSrc, secondSrc }) => (
  <div style={{ textAlign: 'center' }}>
    <Image
      src={`../${firstSrc}`}
      sx={{
        width: '45%',
        marginRight: '0.5%',
      }}
    />
    <Image
      src={`../${secondSrc}`}
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

export default function ProjectTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Box>
        <Container sx={{ alignItems: 'center' }}>
          <BaseHeading
            as="h1"
            sx={{
              mb: 3,
              fontWeight: '600',
              mt: 6,
              fontSize: 'clamp(36px, 3.5vw, 50px)',
            }}
          >
            {mdx.frontmatter.title}
          </BaseHeading>
          <Box sx={{ mt: 4 }}>
            <Image
              src={`../../${mdx.frontmatter.image}`}
              sx={{ width: '100%' }}
            />
          </Box>
          <MDXProvider components={components}>
            <Box>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </Box>
          </MDXProvider>
        </Container>
      </Box>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        image
      }
    }
  }
`;
