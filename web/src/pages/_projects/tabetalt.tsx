import { Box, Heading } from '@theme-ui/components';
import React from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layouts';

const TabetaltPage: React.FC = () => (
  <Layout>
    <Box>
      <Container sx={{ pt: 7 }}>
        <Heading as="h1" sx={{ mb: 4, fontWeight: 'normal' }}>
          Tabetalt – headless e-commerce
        </Heading>
        <Box sx={{ mt: 6 }}>
          <img src="../Tabetalt_logo.jpg" style={{ width: '100%' }} />
        </Box>
        <Heading
          as="h2"
          sx={{
            mt: 5,
            mb: 6,
            fontWeight: 'normal',
            marginRight: '15%',
            marginLeft: '15%',
          }}
        >
          Tabetalt er et av våre egne prosjekter som vi er svært stolte av.
          Tabetalt er en “headless e-commerce” handelssystem for små og
          mellomstore bedrifter. Ta kontakt om du vil vite mer.
        </Heading>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <img
            src="../Tabetalt_web.png"
            style={{
              width: '45%',
              marginRight: '0.5%',
            }}
          />
          <img
            src="../Admin_panel.png"
            style={{
              width: '45%',
              marginLeft: '0.5%',
            }}
          />
        </Box>
      </Container>
    </Box>
  </Layout>
);

export default TabetaltPage;
