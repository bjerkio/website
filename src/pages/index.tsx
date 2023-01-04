import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { BackgroundGraphic } from '../components/layout/background-graphic';
import { Layout } from '../components/layout/layout';
import { PageSection } from '../components/layout/page-section';
import NextLink from 'next/link';
import React from 'react';

const Home = () => (
  <Layout>
 <Grid sx={{ width: '100%' }}>
      <PageSection backgroundColor="green">
        <Container variant="readable">
          <Grid sx={{ gap: 3 }}>
            <Text textStyle='caption'>
              Vår lidenskap er å skape
            </Text>
            <Text textStyle='standard'>
              De siste 12 årene har vi forbedret og forenklet måten mennesker
              lærer, tenker, jobber, og kommuniserer på gjennom å utvikle og
              tilpasse programvare. Vi utvikler, integrerer, kobler sammen,
              rådgir og samarbeider med deg om å lage produkter og tekniske
              løsninger.
            </Text>
          </Grid>

          <Flex
            pt={{ base: 5, md: 8 }}
            flexDirection='column'
            width='80%'
          >
            <Text textStyle='subtitle'>
              Noen av våre seneste kunder
            </Text>
            <Grid
              templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 2fr' }}
              gap={{ base: 3, md: 5 }}
              justifyItems='left'
              alignItems= 'center'
              paddingTop= {{base: 3, md: 5}}
            >
              <Text textStyle='standard'>Folio</Text>
              <Text textStyle='standard'>Layer</Text>
              <Text textStyle='standard'>Grid branding</Text>

              <Text textStyle='standard'>DNB</Text>
              <Text textStyle='standard'>Digdir</Text>
              <Text textStyle='standard'>LO Media</Text>
            </Grid>
          </Flex>
        </Container>
        <BackgroundGraphic
          element="element1"
          positionx="right"
          positiony="39.5rem"
        />
      </PageSection>

      <PageSection>
        <BackgroundGraphic
          element="element2"
          positionx="left"
          positiony="60rem"
        />
        <Container variant="readable">
          <Text textStyle='standard'>
            Samarbeid, samspill, programvare som virker, iterativ utvikling,
            kontinuitet, gode insentiver og Super Mario-effekten er noe av det
            vi mener kreves for å lykkes. <br></br>
            <Link as={NextLink} href={'/principles'} variant="emphasis">
              Les mer om oss og hvordan vi jobber
            </Link>
          </Text>
        </Container>
      </PageSection>
    </Grid>
  </Layout>
);
export default Home;
