import { Box, Heading } from '@theme-ui/components';
import React from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layouts';

const OsloJazzPage: React.FC = () => (
  <Layout>
    <Box>
      <Container sx={{ pt: 6, alignItems: 'center' }}>
        <Heading as="h1" sx={{ mb: 3, fontWeight: 'normal' }}>
          Oslo Jazz
        </Heading>
        <Box sx={{ mt: 4 }}>
          <img src="../OsloJazz_Mockup.jpg" style={{ width: '100%' }} />
        </Box>
        <Heading
          as="h2"
          sx={{
            mt: 5,
            mb: 5,
            fontWeight: 'normal',
            marginLeft: '15%',
            marginRight: '15%',
          }}
        >
          Bjerk støtter kultur- og musikkfestivalen Oslo Jazz og har bidratt med
          utvikling av deres nettsider. Her er hva Head of Marketing and
          Communication sier om samarbeidet.
        </Heading>
        <Heading
          as="h2"
          sx={{
            mt: 4,
            mb: 5,
            fontWeight: 'normal',
            marginLeft: '15%',
            marginRight: '15%',
          }}
        >
          <a
            style={{
              position: 'absolute',
              left: '17.5%',
              marginTop: '-20px',
              height: 'auto',
              font: 'normal normal 600 70px/80px TT Commons',
              color: '#4ecca3',
            }}
          >
            “
          </a>
          Bjerk har vært en meget god ressurs og sparringspartner for utvikling
          av ny webside for Oslo Jazzfestival. De har evnet å se våre behov og
          finne gode måter å innfri dette. Opplevelsen av å jobbe med Bjerk er
          en opplevelse av å bli inkludert som en aktiv part i
          utviklingsprosessen, i stedet for å bare være en kjøper av et produkt.
        </Heading>
        <Heading
          as="h2"
          sx={{
            mt: 5,
            mb: 5,
            fontWeight: 'normal',
            marginLeft: '15%',
            marginRight: '15%',
            color: '#4ecca3',
          }}
        >
          André Ishak
        </Heading>
      </Container>
    </Box>
  </Layout>
);

export default OsloJazzPage;
