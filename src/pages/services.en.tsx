import { Container, Heading, Text } from '@theme-ui/components';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
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
        <Heading as="h2">Application and software development</Heading>
        <Text>
          Do you have ideas for an application or maybe your company needs
          softwarer for a smoother everyday life? We at Bjerk can help you with
          everything from development and integration of software to
          applications so that your workday is automated and thus more
          efficient. Our highly skilled solution architect and Head of
          Developing Team - Simen - can help you find the best solution for your
          idea.
        </Text>
      </FeatureBox>
      <StaticImage src="../assets/services-split.png" alt="services" />
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
