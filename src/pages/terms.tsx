/** @jsx jsx */
import { Box, Container, Heading, Text } from '@theme-ui/components';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { jsx } from 'theme-ui';
import Layout from '../components/layouts';
import SEO from '../components/seo';

export const Services: React.FC = () => (
  <Layout>
    <Container variant="centered">
      <SEO title="Terms and Services" />
      <Heading variant="hero">
        Alminnelige betingelser
      </Heading>
      <Text><a href="https://docs.google.com/document/d/e/2PACX-1vQL31k2hTUoOhwlJAZlR1ksuJ9SI-130iSw5yjuMRK6-u-7TEDkO-zVk9turmddmBGMCNxycfz88jiT/pub">Se betingelsene</a></Text>
    </Container>
  </Layout>
);

export default Services;
