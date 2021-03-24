import { Box, Heading } from '@theme-ui/components';
import React from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layouts';

const LentPage: React.FC = () => (
  <Layout>
    <Box>
      <Container sx={{ pt: 6, alignItems: 'center' }}>
        <Heading as="h1" sx={{ mb: 3, fontWeight: 'normal' }}>
          Lent – en læringsapplikasjon
        </Heading>
        <Box sx={{ mt: 4 }}>
          <img src="../Lent_mockup_web.jpg" style={{ width: '100%' }} />
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
          Lent er Norges største fagmiljø på prosessledelse og vi i Bjerk er
          stolte av resultatene av vårt samarbeid. Bjerk har utviklet Lent sine
          egne kurs verktøy for mobil bruk.
        </Heading>
      </Container>
    </Box>
  </Layout>
);

export default LentPage;
