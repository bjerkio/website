import { Box, Flex, Heading, Label, Link } from '@theme-ui/components';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import MapSvg from '../assets/map.svg';
import { EmployeeList } from '../components/contact/exployee-list';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

const styles: SystemStyleObject = {
  '.image': {
    width: '20rem',
    height: '20rem',
    maxWidth: '396px',
    maxHeight: '328px',
    right: '15rem',
    position: 'absolute',
    top: '15rem',
    display: ['none', 'none', 'block'],
  },
  '.mobileImage': {
    width: '20rem',
    display: ['block', 'block', 'none'],
  },
};

// TODO: replace image with gatsby-image when sanity will done
const Contact: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Box sx={styles}>
          <Flex>
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
                  <MapSvg />
                </Box>
              </Flex>
            </Box>
            <Box className="image">
              <MapSvg />
            </Box>
          </Flex>
          <EmployeeList
            data={[
              {
                name: 'Simen A. W. Olsen',
                position: 'Daglig leder / løsningsarkitekt',
                email: 'so@bjerk.io',
                phoneNumber: '+47 953 08 087',
              },
              {
                name: 'Bjørn Niklas Sjøstrøm',
                position: 'Strategirådgiver',
                email: 'bns@bjerk.io',
                phoneNumber: '+47 905 86 616',
              },
              {
                name: 'Anna Edvardsen',
                position: 'Prosjektleder',
                email: 'anna@bjerk.io',
                phoneNumber: '+47 900 00 000',
              },
            ]}
          />
        </Box>
      </Container>
    </Layout>
  );
};

export default Contact;
