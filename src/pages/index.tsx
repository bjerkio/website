import { Box, Container, Grid, Heading, Text } from '@theme-ui/components';
import { graphql } from 'gatsby';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import Hero from '../components/hero';
import CallToActionBox from '../components/home-page/call-to-action-box';
import { ProjectBox } from '../components/home-page/project-box';
import {
  Code,
  ProjectManagement,
  StrategicAdvice,
} from '../components/illustrations';
import { Layout } from '../components/layouts';
import SEO from '../components/seo';
import { HomePageQuery } from '../generated/graphql-types';

export const query = graphql`
  query HomePage {
    allMdx(
      sort: { fields: [frontmatter___id] }
      filter: { frontmatter: { language: { eq: "en" } } }
    ) {
      nodes {
        frontmatter {
          ...ProjectBox
        }
      }
    }
    heroImage: file(
      relativePath: { eq: "heros/pexels-zaksheuskaya-1616403.jpg" }
    ) {
      ...Hero
    }
  }
`;

const Homepage: React.FC<{ data: HomePageQuery }> = ({ data }) => {
  return (
    <Layout>
      <SEO />
      <Hero image={data.heroImage}>
        <Box>
          <Text
            sx={{
              fontWeight: '600',
              color: 'white',
              fontSize: 'clamp(16px, 8vw, 50px)',
            }}
          >
            We are developers, creators, strategists and activists.
          </Text>
          {/* <Button
              // href="/contact"
              sx={{ paddingTop: '20px', paddingBottom: '15px' }}
            >
              {t('home-page:video-button-text')}
            </Button> */}
        </Box>
      </Hero>
      <Container variant="centered" sx={{ pt: 6 }}>
        <Heading
          sx={{
            mb: 3,
            fontWeight: '600',
            fontSize: 'clamp(16px, 8vw, 62px)',
          }}
        >
          <FormattedMessage
            id="home-how-can-we-help"
            defaultMessage="How can we help?"
          />
        </Heading>
        <Text
          sx={{
            width: ['100%', '100%', '65%'],
            fontWeight: 'normal',
            fontSize: 5,
          }}
        >
          Our goal is to create a workplace where people are driven by creating
          experiences and improving the everyday lives of people - by people,
          for people. Our medium is technology, and the passion is to create.
        </Text>
        <Grid
          pt={5}
          sx={{
            gap: 5,
            gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
          }}
        >
          <CallToActionBox
            title="Software Environment"
            image={<Code sx={{ width: '100%' }} />}
          >
            Bjerk develops desktop and mobile applications. We deliver digital
            solutions based on modern technology and methodology.
          </CallToActionBox>
          <CallToActionBox
            title="Strategic Advisory"
            image={<StrategicAdvice sx={{ width: '100%' }} />}
          >
            Is your company going through a digitization process? Bjerk assists
            you and your employees with everything from digital solutions to
            change management.
          </CallToActionBox>
          <CallToActionBox
            title="Agile Project Management"
            image={<ProjectManagement sx={{ width: '100%' }} />}
          >
            Our employees have many years of experience in both software
            development and delivery, and management.
          </CallToActionBox>
        </Grid>
        <Heading as="h2" sx={{ fontSize: 6, mt: 4 }}>
          Check us out
        </Heading>
        {data.allMdx.nodes.map((item, index) => (
          <ProjectBox key={index} data={item.frontmatter} />
        ))}
      </Container>
    </Layout>
  );
};

export default Homepage;
