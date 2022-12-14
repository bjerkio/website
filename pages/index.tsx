import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { BackgroundGraphic } from '../components/background-graphic';
import { Layout } from '../components/layout/layout';
import { PageSection } from '../components/page-section';
import NextLink from 'next/link';

const Home = () => (
  <Layout>
    <Grid sx={{ width: '100%' }}>
      <PageSection backgroundColor="green">
        <Container variant="readable" px={{ sm: 6, base: 6, md: 0, xl: 0 }}>
          <Grid sx={{ gap: 2 }}>
            <Text variant={{ sm: 'caption', base: 'caption' }}>
              Vår lidenskap er å skape
            </Text>
            <Text variant="standard">
              De siste 12 årene har vi forbedret og forenklet måten mennesker
              lærer, tenker, jobber, og kommuniserer på gjennom å utvikle og
              tilpasse programvare. Vi utvikler, integrerer, kobler sammen,
              rådgir og samarbeider med deg om å lage produkter og tekniske
              løsninger.
            </Text>
          </Grid>

          <Flex
            pt={{ base: '40px', md: '100px' }}
            sx={{
              flexDirection: 'column',
              width: '80%',
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
              <Link as={NextLink} href={'/principles'} variant="emphasis">
                Les mer om oss og hvordan vi jobber
              </Link>
            </Box>
          </Text>
        </Container>
      </PageSection>
    </Grid>
  </Layout>
);

export default Home;
