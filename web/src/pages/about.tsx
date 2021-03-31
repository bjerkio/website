import { Box, Button, Grid, Heading, Label } from '@theme-ui/components';
import { graphql } from 'gatsby';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { AboutList } from '../components/about-page/about-list';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

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
      filter: {
        frontmatter: {
          type: { eq: "about-articles" }
          language: { eq: $language }
        }
      }
      sort: { fields: [frontmatter___id], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            descriptionArray
            image
            title
          }
        }
      }
    }
  }
`;

const AboutPage = ({
  data: {
    mdxs: { edges },
  },
}) => {
  const boxesData = edges.map((edge) => edge.node.frontmatter);
  const { t } = useTranslation();
  const { navigate } = useI18next();

  return (
    <Layout>
      <Container sx={{ pr: [0, 0, 6], pl: [0, 0, 6] }}>
        <Heading
          as="h1"
          sx={{
            fontWeight: '600',
            width: ['100%', '60%'],
            fontSize: 'clamp(36px, 3.5vw, 50px)',
            mt: 6,
            mb: [0, 0, 6],
            pr: [4, 4, 0],
            pl: [4, 4, 0],
          }}
        >
          {t('about-page:title')}
        </Heading>
        <AboutList
          data={boxesData.map((item, index) => ({
            ...item,
            textAlign: index & 1 ? 'right' : 'left',
          }))}
        />
        <Box pt={6} sx={{ width: '100%', height: 'auto' }}>
          <img
            src={`../${t('about-page:dividing-image')}`}
            style={{ width: '100%' }}
          />
        </Box>
        <Grid gap={5} columns={[1, 1, 2]} sx={{ px: [4, 4, 5], pt: [4, 4, 6] }}>
          <Box>
            <img
              src={`../${t('about-page:simen-niklas-image')}`}
              style={{ width: '100%' }}
            />
          </Box>
          <Box>
            <Label sx={{ fontSize: 'clamp(16px, 2vw, 25px)' }}>
              {t('about-page:bjerk-info-text')}
            </Label>
            <Button
              variant="empty"
              onClick={() => navigate('/services')}
              my={3}
              sx={{
                fontFamily: 'TTCommons !important',
              }}
            >
              {t('about-page:bjerk-info-button-text')}
            </Button>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export default AboutPage;
