import { Box, Heading } from '@theme-ui/components';
import React from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layouts';

const IndivPage: React.FC = () => (
  <Layout>
    <Box>
      <Container sx={{ pt: 6, alignItems: 'center' }}>
        <Heading as="h1" sx={{ mb: 3, fontWeight: 'normal' }}>
          Indiv
        </Heading>
        <Box sx={{ mt: 4 }}>
          <img src="../Indiv_Mockup.jpg" style={{ width: '100%' }} />
        </Box>
        <Heading
          as="h2"
          sx={{
            mt: 5,
            mb: 3,
            fontWeight: 'normal',
            marginLeft: '15%',
            marginRight: '15%',
          }}
        >
          Indiv er et hjertebarn i Bjerk. Dette er et internt verktoy for
          utviklingsbedrifter i hele Norge og vi haper pa at vi kan bidra til en
          enklere og bedre hverdag for de som jobber i bransjen.
        </Heading>
      </Container>
    </Box>
  </Layout>
);

export default IndivPage;
