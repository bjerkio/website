import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Heading } from 'theme-ui';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';
import { ServiceList } from '../components/services-page/service-list';

const dividedImage = 'ServicesSplit.png';

const ServicesPage: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query ServicesQuery {
      allMdx(
        filter: { frontmatter: { type: { eq: "services-articles" } } }
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
  `);

  const boxesData = edges.map((edge) => edge.node.frontmatter.servicesPage);

  return (
    <Layout>
      <Container>
        <Heading
          as="h1"
          sx={{
            fontWeight: 'normal',
            width: ['100%', '60%'],
            my: 5,
          }}
        >
          Bjerk hjelper bedriften din med å ta det neste steget inn i fremtiden.
        </Heading>
        <ServiceList
          data={boxesData.map((item, index) => ({
            ...item,
            dividedImage: index !== boxesData.length - 1 ? dividedImage : null,
            textAlign: index & 1 ? 'right' : 'left',
          }))}
        />
      </Container>
    </Layout>
  );
};

export default ServicesPage;
