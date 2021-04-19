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
      <SEO title="Våre tjenester" />
      <Heading variant="hero">
        Bjerk hjelper bedriften din med å ta det neste steget inn i fremtiden.
      </Heading>
      <FeatureBox
        textAlign="left"
        illustration={<ServicesCode sx={{ width: '100%' }} />}
      >
        <Heading as="h2">Applikasjons- og programvareutvikling</Heading>
        <Text>
          Har du ideer for en applikasjon eller trenger kanskje bedriften din et
          program for en smidigere hverdag? Vi i Bjerk kan hjelpe deg med alt
          fra utvikling og integrering av programvare til applikasjoner slik at
          arbeidshverdagen din blir automatisert og dermed mer effektiv. Vår
          meget dyktige løsningsarkitekt og Head of Developing Team - Simen -
          kan hjelpe deg med å finne den beste løsningen for din ide.
        </Text>
      </FeatureBox>
      <StaticImage src="../assets/services-split.png" alt="services" />
      <FeatureBox
        textAlign="right"
        illustration={<ServicesStrategic sx={{ width: '100%' }} />}
      >
        <Heading as="h2">Strategisk rådgivning</Heading>
        <Text>
          Har du ideer for en applikasjon eller trenger kanskje bedriften din et
          program for en Våre strategiske rådgivere vil hjelpe deg med å
          fokusere på produktet bedriften din har. Vi diskuterer gjerne dine
          behov med tanke på kartlegging av både prisstrategi og
          lanseringsstrategi. Bjerk bistår deg også med å bygge et sterkt og
          konkurransedyktig team som vil bidra til at bedriften din når
          potensialet sitt. Snakk med Niklas om hvordan du og din bedrift kommer
          seg over den digitale dørstokken.
        </Text>
      </FeatureBox>
    </Container>
  </Layout>
);

export default Services;
