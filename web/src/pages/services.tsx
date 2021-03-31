import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import * as React from 'react';
import { Heading } from 'theme-ui';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';
import { ServiceList } from '../components/services-page/service-list';

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
          type: { eq: "services-articles" }
          language: { eq: $language }
        }
      }
      sort: { fields: [frontmatter___servicesPage___id], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            servicesPage {
              name
              title
              description
              url {
                navigationLink
                linkText
              }
              photo
              icon
              initials
              position
            }
          }
        }
      }
    }
  }
`;

const ServicesPage = ({
  data: {
    mdxs: { edges },
  },
}) => {
  const boxesData = edges.map((edge) => edge.node.frontmatter.servicesPage);
  const { t } = useTranslation();

  return (
    <Layout>
      <Container sx={{ pr: [0, 0, 6], pl: [0, 0, 6] }}>
        <Heading
          as="h1"
          sx={{
            fontWeight: '600',
            fontSize: 'clamp(36px, 3.5vw, 50px)',
            width: ['100%', '60%'],
            my: 6,
            pr: [4, 4, 0],
            pl: [4, 4, 0],
          }}
        >
          {t('services-page:title')}
        </Heading>
        <ServiceList
          data={boxesData.map((item, index) => ({
            ...item,
            dividingImage:
              index !== boxesData.length - 1
                ? t('services-page:dividing-image')
                : null,
            textAlign: index & 1 ? 'right' : 'left',
          }))}
        />
      </Container>
    </Layout>
  );
};

export default ServicesPage;
