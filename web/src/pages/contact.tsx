import { Box, Heading, Image, Label, Link } from '@theme-ui/components';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import { EmployeeList } from '../components/contact/exployee-list';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

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

  const employeeList = edges.map((edge) => edge.node.frontmatter);
  return (
    <Layout>
      <Container sx={{ pr: [0, 0, 6] }}>
        <Box sx={styles}>
          <Box sx={{ display: 'flex', flexDirection: 'row', mb: [ 0, 0, 6 ] }}>
            <Box sx={{ flex: 3 }}>
              <Heading
                as="h1"
                sx={{
                  fontWeight: '600',
                  width: ['100%', '100%', '60%'],
                  mb: 5,
                  mt: [ 0, 0, 5 ],
                  pr: [ 4, 4, 0 ],
                  fontSize: 'clamp(36px, 3.5vw, 50px)',
                }}
              >
                Ta kontakt med en av oss for en hyggelig og uforpliktende prat
              </Heading>
              <Box
                sx={{
                  fontSize: 'clamp(20px, 2.3vw, 35px)',
                  mb: [ -6, -6, 0 ]
                }}
              >
                <Link sx={{ color: 'black' }}>kontoret@bjerk.io</Link>
              <Label>+47 22 12 05 12</Label>
                <Label mt={3}>Dronningens gate 8B,</Label>
                <Label>0151 Oslo</Label>
              </Box>
            </Box>
            <Box sx={{ flex: [ 0, 0, 1 ] }}>
              <Image
                src="../map.svg"
                sx={{
                  width: [ 0, 0, '100%' ],
                  display: ['none', 'none', 'block'],
                }}
              />
            </Box>
          </Box>
          <Image
            src="../map.svg"
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
