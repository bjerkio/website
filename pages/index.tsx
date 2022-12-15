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
        <Container variant="readable">
          <Grid sx={{ gap: 3 }}>
            <Text textStyle={{ base: 'caption' }}>
              Vår lidenskap er å skape
            </Text>
            <Text textStyle={{ base: 'standard' }}>
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
            <Text textStyle={{ base: 'subtitle' }}>Noen av våre seneste kunder</Text>
            <Grid
              templateColumns={{ base:'1fr 1fr', md:'1fr 1fr 2fr'}}
              gap={[3, 5]}
              sx={{
                justifyItems: 'Left',
                alignItems: 'center',
                paddingTop: ['20px', '40px'],
              }}
            >
              <Text textStyle={{ base: 'standard' }}>Folio</Text>
              <Text textStyle={{ base: 'standard' }}>Layer</Text>
              <Text textStyle={{ base: 'standard' }}>Grid branding</Text>

              <Text textStyle={{ base: 'standard' }}>DNB</Text>
              <Text textStyle={{ base: 'standard' }}>Digdir</Text>
              <Text textStyle={{ base: 'standard' }}>LO Media</Text>
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
          <Text textStyle={{ base: 'standard' }}>
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
