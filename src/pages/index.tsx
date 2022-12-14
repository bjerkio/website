import type { NextPage } from 'next';
import { Link } from 'next-theme-ui';
import { Box, Container, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import { BackgroundGraphic } from '../components/background-graphic';
import { Layout } from '../components/layout/layout';
import { PageSection } from '../components/page-section';

const Home = () => {
  return (
    <Layout>
      <Grid sx={{ width: '100%' }}>
        <PageSection backgroundColor="green">
          <Container variant="readable">
            <Grid sx={{ gap: 3 }}>
              <Heading variant="title">Vår lidenskap er å skape</Heading>
              <Text variant="standard">
                De siste 12 årene har vi forbedret og forenklet måten mennesker
                lærer, tenker, jobber, og kommuniserer på gjennom å utvikle og
                tilpasse programvare. Vi utvikler, integrerer, kobler sammen,
                rådgir og samarbeider med deg om å lage produkter og tekniske
                løsninger.
              </Text>
            </Grid>

            <Flex
              sx={{
                flexDirection: 'column',
                width: '80%',
                paddingTop: ['40px', '100px'],
              }}
            >
              <Text variant="subtitle">Noen av våre seneste kunder</Text>
              <Grid
                templateColumns={['1fr 1fr', '1fr 1fr 2fr']}
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
                <Text variant="excerpt">LO Media</Text>
              </Grid>
            </Flex>
          </Container>
          <BackgroundGraphic
            element="element1"
            positionx="right"
            positiony="710px"
          />
        </PageSection>

        <PageSection>
          <BackgroundGraphic
            element="element2"
            positionx="left"
            positiony="1225px"
          />
          <Container variant="readable">
            <Text variant="excerpt">
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
            </Text>
          </Container>
        </PageSection>
      </Grid>
    </Layout>
  );
};

export default Home;
