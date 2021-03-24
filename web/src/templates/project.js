import { MDXProvider } from '@mdx-js/react';
import { Box as BaseBox, Heading as BaseHeading } from '@theme-ui/components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

const Box = ({ children, ...props }) => (
  <BaseBox {...props}>{children}</BaseBox>
);
const Heading = ({ children, ...props }) => (
  <BaseHeading {...props}>{children}</BaseHeading>
);

export default function ProjectTemplate({ data: { mdx } }) {
  return (
    <Layout>
      <Box>
        <Container sx={{ pt: 6, alignItems: 'center' }}>
          <Heading as="h1" sx={{ mb: 3, fontWeight: 'normal' }}>
            {mdx.frontmatter.title}
          </Heading>
          <Box sx={{ mt: 4 }}>
            <img
              src={`../${mdx.frontmatter.image}`}
              style={{ width: '100%' }}
            />
          </Box>
          <Heading
            as="h2"
            sx={{
              mt: 5,
              mb: 5,
              fontWeight: 'normal',
              marginLeft: '15%',
              marginRight: '15%',
            }}
          >
            {mdx.frontmatter.description}
          </Heading>
          <MDXProvider components={{ Box, Heading }}>
            <MDXRenderer>{mdx.body}</MDXRenderer>
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
        description
      }
    }
  }
`;
