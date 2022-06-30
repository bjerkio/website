import type { NextPage } from 'next';
import { Link } from 'next-theme-ui';
import { Box, Container, Flex, Grid, Heading, Paragraph, Text } from 'theme-ui';
import { BackgroundGraphic } from '../components/background-graphic';
import { Layout } from '../components/layout/layout';
import { PageSection } from '../components/page-section';

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid
        sx={{
          width: '100%',
          backgroundColor: 'green100',
          backgroundImage: ['', '', 'url(/circle-sound.svg)'],
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right bottom 20%',
        }}
      >
        <Container variant="readable" sx={{ py: 9 }}>
          <Grid sx={{ gap: 3 }}>
            <Heading variant="title">Vår lidenskap er å skape</Heading>
            <Paragraph variant="standard">
              De siste 12 årene har vi forbedret og forenklet måten mennesker
              lærer, tenker, jobber, og kommuniserer på gjennom å utvikle og
              tilpasse programvare. Vi utvikler, integrerer, kobler sammen,
              rådgir og samarbeider med deg om å lage produkter og tekniske
              løsninger.
            </Paragraph>
          </Grid>

          <Grid
            sx={{
              width: '80%',
              paddingTop: ['40px', '100px'],
            }}
          >
            <Text variant="subtitle">Noen av våre seneste kunder</Text>
            <Grid
              columns={['1fr 1fr', '1fr 1fr 2fr']}
              gap={[3, 5]}
              sx={{
                justifyItems: 'Left',
                alignItems: 'center',
                paddingTop: ['20px', '40px'],
              }}
            >
              <Text variant="excerpt">Folio</Text>
              <Text variant="excerpt">Layer</Text>
              <Text variant="excerpt">Grid branding</Text>

              <Text variant="excerpt">DNB</Text>
              <Text variant="excerpt">Digdir</Text>
              <Text variant="excerpt">Avfall Norge</Text>
            </Grid>
          </Grid>
        </Container>
      </Grid>
      <Grid
        sx={{
          width: '100%',
          backgroundImage: ['', '', 'url(/element2.svg)'],
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          py: 9,
        }}
      >
        <Container variant="readable">
          <Paragraph variant="excerpt">
            Samarbeid, samspill, programvare som virker, iterativ utvikling,
            kontinuitet, gode insentiver og Super Mario-effekten er noe av det
            vi mener kreves for å lykkes. <br></br>
            <Box
              sx={{
                paddingTop: '20px',
                fontSize: [1, 3],
              }}
            >
              <Link href={'/principles'} variant="emphasis">
                Les mer om oss og hvordan vi jobber
              </Link>
            </Box>
          </Paragraph>
        </Container>
      </Grid>
    </Layout>
  );
};

export default Home;
