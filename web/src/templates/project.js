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
          left: '18.5%',
          marginTop: '-10px',
          height: 'auto',
          textDecoration: 'none',
          font: 'normal normal 600 70px/80px TT Commons',
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
        <Container sx={{ alignItems: 'center'}}>
          <BaseHeading as="h1" sx={{ mb: 3, fontWeight: 'normal', mt: 6 }}>
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
