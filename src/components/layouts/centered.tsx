import { MDXProvider } from '@mdx-js/react';
import { Container } from '@theme-ui/components';
import { Link } from 'gatsby';
import React from 'react';
import FeatureBox from '../feature-box';
import * as illu from '../illustrations';
import SEO from '../seo';
import Layout from '.';

const shortcodes = { Link, FeatureBox, SEO, ...illu };

const Centered: React.FC = ({ children }) => {
  return (
    <Layout>
      <Container variant="centered">
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </Container>
    </Layout>
  );
};

export default Centered;
