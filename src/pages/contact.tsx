import { Box, Heading, Image, Label, Link } from '@theme-ui/components';
import { graphql } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import { EmployeeList } from '../components/contact/exployee-list';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';
import SEO from '../components/seo';
import { Map } from '../illustrations';

const styles: SystemStyleObject = {
  mt: 6,
  mb: 6,
  overflow: 'hidden',
  '.mobileImage': {
    width: '50%',
    display: ['block', 'block', 'none'],
    marginLeft: '50%',
  },
};

const ContactPage = ({ data }) => {
  const employeeList = data.mdxs.edges.map((edge) => edge.node.frontmatter);
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title="Kontakt oss" />
      <Container sx={{ pr: [0, 0, 6] }}>
        <Box sx={styles}>
          <Box sx={{ display: 'flex', flexDirection: 'row', mb: [0, 0, 6] }}>
            <Box sx={{ flex: 3 }}>
              <Heading
                as="h1"
                sx={{
                  fontWeight: '600',
                  width: ['100%', '100%', '60%'],
                  mb: 5,
                  mt: [0, 0, 5],
                  pr: [4, 4, 0],
                  fontSize: 'clamp(36px, 3.5vw, 50px)',
                }}
              >
                {t('contact-page:title')}
              </Heading>
              <Box
                sx={{
                  fontSize: 'clamp(20px, 2.3vw, 35px)',
                  mb: [-6, -6, 0],
                }}
              >
                <Link sx={{ color: 'black' }}>{t('company-info:email')}</Link>
                <Label>{t('company-info:phone-number')}</Label>
                <Label mt={1}>{t('company-info:address')},</Label>
                <Label>{t('company-info:postalcode')}</Label>
              </Box>
            </Box>
            <Box sx={{ flex: [0, 0, 1] }}>
              <Map
                sx={{
                  width: [0, 0, '100%'],
                  display: ['none', 'none', 'block'],
                }}
              />
            </Box>
          </Box>
          <Image
            src={`../${t('contact-page:image')}`}
            sx={{
              width: '50%',
              display: ['block', 'block', 'none'],
              marginLeft: '60%',
              mb: 5,
            }}
          />
          <EmployeeList data={employeeList} />
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactPage;

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
        frontmatter: { type: { eq: "employee" }, language: { eq: $language } }
      }
      sort: { fields: [frontmatter___id], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            name
            position
            email
            phoneNumber
            photo
          }
        }
      }
    }
  }
`;
