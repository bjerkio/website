import { Box, Grid, Heading, Label } from '@theme-ui/components';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import Button from '../components/button';
import { Container } from '../components/container';
import Hero from '../components/hero';
import CallToActionBox, {
  CallToActionBoxProps,
} from '../components/home-page/call-to-action-box';
import CallToActionImage, {
  CallToActionImageProps,
} from '../components/home-page/call-to-action-image';
import { Layout } from '../components/layouts';

const filterType = (obj, type) => {
  return obj.edges
    .filter((edge) => edge.node?.frontmatter)
    .filter((edge) => edge.node.frontmatter.type === type)
    .map((edge) => edge.node.frontmatter.homePage);
};

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    mdxs: allMdx(
      filter: { frontmatter: { language: { eq: $language } } }
      sort: { fields: [frontmatter___homePage___id], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            type
            homePage {
              title
              linkTo
              linkText
              image
              hoverImage
              description
              imageStyle {
                ml
              }
            }
          }
        }
      }
    }
  }
`;

const Homepage = ({ data }) => {
  const actionBox: CallToActionBoxProps[] = filterType(
    data.mdxs,
    'services-articles',
  );
  const projectsBox: CallToActionImageProps[] = filterType(
    data.mdxs,
    'projects',
  );
  const { t } = useTranslation();
  return (
    <Layout>
      <Box>
        <Hero>
          <Box sx={{ fontSize: 'clamp(16px, 8vw, 50px)' }}>
            <Label sx={{ fontWeight: '600', color: 'white' }}>
              {t('home-page:video-title')}
            </Label>
            <Button
              href="/contact"
              sx={{ paddingTop: '20px', paddingBottom: '15px' }}
            >
              {t('home-page:video-button-text')}
            </Button>
          </Box>
        </Hero>
        <Container sx={{ pt: [5, 5, 7] }}>
          <Heading
            sx={{
              mb: 3,
              fontWeight: '600',
              fontSize: 'clamp(16px, 8vw, 48px)',
            }}
          >
            {t('home-page:title')}
          </Heading>
          <Box
            sx={{
              width: ['100%', '100%', '65%'],
              fontWeight: 'normal',
              fontSize: 'clamp(8px, 4vw, 22px)',
            }}
          >
            {t('home-page:description')}
          </Box>
          <Grid
            pt={5}
            sx={{
              gap: 5,
              gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
            }}
          >
            {actionBox.map((ctabox, index) => (
              <CallToActionBox data={ctabox} key={index}>
                {ctabox.description}
              </CallToActionBox>
            ))}
          </Grid>
        </Container>
        <Container sx={{ px: [0, 0, 6] }}>
          <Box>
            <Label
              sx={{
                fontWeight: '600',
                fontSize: '50px',
                pl: [4, 4, 0],
                mr: [-4, -4, 0],
              }}
            >
              {t('home-page:middle-title')}
            </Label>
          </Box>
          {projectsBox.map((item, index) => (
            <CallToActionImage key={index} data={item} />
          ))}
        </Container>
      </Box>
    </Layout>
  );
};

export default Homepage;
