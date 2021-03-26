import { Box, Flex, Heading, Label, Link } from '@theme-ui/components';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import { EmployeeList } from '../components/contact/exployee-list';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

const styles: SystemStyleObject = {
  mt: 5,
  '.image': {
    width: '20rem',
    height: '20rem',
    maxWidth: '396px',
    maxHeight: '328px',
    right: '17rem',
    position: 'absolute',
    marginTop: '4rem',
    display: ['none', 'none', 'block'],
  },
  '.mobileImage': {
    width: '20rem',
    display: ['block', 'block', 'none'],
  },
};

const ContactPage: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query ContactQuery {
      allMdx(
        filter: { frontmatter: { type: { eq: "employee" } } }
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
  `);

  const empoyeeList = edges.map((edge) => edge.node.frontmatter);
  
  return (
    <Layout>
      <Container>
        <Box sx={styles}>
          <Flex sx={{ mb: 6 }}>
            <Box>
              <Heading
                as="h1"
                sx={{
                  fontWeight: 'normal',
                  width: ['100%', '60%'],
                  my: 5,
                }}
              >
                Ta kontakt med en av oss for en hyggelig og uforpliktende prat
              </Heading>
              <Flex>
                <Box
                  sx={{
                    fontSize: [2, 3, 3],
                  }}
                >
                  <Link sx={{ color: 'black' }}>kontoret@bjerk.io</Link>
                  <Label>+47 22 12 05 12</Label>
                  <Label>Dronningens gate 8B,</Label>
                  <Label>0151 Oslo</Label>
                </Box>
                <Box className="mobileImage">
                  <img src="../map.svg" style={{ width: '100%' }} />
                </Box>
              </Flex>
            </Box>
            <Box className="image">
              <img src="../map.svg" style={{ width: '100%' }} />
            </Box>
          </Flex>
          <EmployeeList data={empoyeeList} />
        </Box>
      </Container>
    </Layout>
  );
};

export default ContactPage;
