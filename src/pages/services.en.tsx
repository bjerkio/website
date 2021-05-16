/** @jsx jsx */
import { Box, Container, Heading, Text } from '@theme-ui/components';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { jsx } from 'theme-ui';
import FeatureBox from '../components/feature-box';
import { ServicesCode, ServicesStrategic } from '../components/illustrations';
import Layout from '../components/layouts';
import SEO from '../components/seo';

export const Services: React.FC = () => (
  <Layout>
    <Container variant="centered">
      <SEO title="Our Services" />
      <Heading variant="hero">
        Bjerk helps your company take the next step into the future.
      </Heading>
      <FeatureBox
        textAlign="left"
        illustration={<ServicesCode sx={{ width: '100%' }} />}
      >
        <Heading as="h2">Application and Software development</Heading>
        <Box sx={{ fontWeight: 600 }}>
          Bjerk helps organizations build first-class software. For more than a
          decade, we have created hundreds of applications, integrations and
          designs that drive businesses to new paradigms.
        </Box>
        <Box sx={{ mt: 3 }}>
          We are driven by helping real people with real issues. When becoming a
          Bjerk customer, you&apos;ll learn about the way that we tightly work
          with customers, communities and target groups to solve problems.
        </Box>
      </FeatureBox>
      <StaticImage src="../assets/services-split.png" sx={{ height: '200px', my: 1 }} alt="services" />
      <FeatureBox
        textAlign="right"
        illustration={<ServicesStrategic sx={{ width: '100%' }} />}
      >
        <Heading as="h2">Strategic advice</Heading>
        <Text>
          Our strategic advisors will help you focus on the product your company
          has. We are happy to discuss your needs with a view to mapping both
          pricing strategy and launch strategy. Bjerk also helps you build a
          strong and competitive team that will help your company reach its
          potential. Talk to Niklas about how you and your company can get over
          the digital doorstep.
        </Text>
      </FeatureBox>
    </Container>
  </Layout>
);

export default Services;
