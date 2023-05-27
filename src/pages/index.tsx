import { Box, Container, Flex, Grid, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { Layout } from '../components/layout/layout';

const Home = () => (
  <Layout>
    <Grid sx={{ width: '100%' }}>
      <Box
        sx={{
          backgroundColor: 'green100',
          backgroundImage: [, , 'url(/element1.svg)'],
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '100% 80%',
          backgroundSize: '400px',

          py: { base: 7, md: 9 },
          width: '100%',
        }}
      >
        <Container variant="readable">
          <Grid sx={{ gap: 3 }}>
            <Text textStyle="caption">
              Verden til et bedre sted gjennom teknologi
            </Text>
            <Text textStyle="standard">
              Vi forbedret og forenklet måten mennesker lærer, tenker, jobber,
              og kommuniserer på gjennom å utvikle og tilpasse produkter.
            </Text>
             <Link as={NextLink} href={'/about'} variant="emphasis">Bli med på reisen med oss</Link>
          </Grid>

          <Flex pt={{ base: 5, md: 8 }} flexDirection="column" width="80%">
            <Text textStyle="subtitle">Noen av våre seneste kunder</Text>
            <Grid
              templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 2fr' }}
              gap={{ base: 3, md: 5 }}
              justifyItems="left"
              alignItems="center"
              paddingTop={{ base: 3, md: 5 }}
            >
              <Text textStyle="standard">Folio</Text>
              <Text textStyle="standard">Layer</Text>
              <Text textStyle="standard">Grid branding</Text>

              <Text textStyle="standard">DNB</Text>
              <Text textStyle="standard">Digdir</Text>
              <Text textStyle="standard">LO Media</Text>
            </Grid>
          </Flex>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: 'green20',
          backgroundImage: [, , , 'url(/element2.svg)'],
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center left',
          backgroundSize: [, , '', '150px'],

          py: { base: 7, md: 10 },
        }}
      >
        <Container variant="readable">
          <Text textStyle="standard">
            Samarbeid, samspill, programvare som virker, iterativ utvikling,
            kontinuitet, gode insentiver og Super Mario-effekten er noe av det
            vi mener kreves for å lykkes. <br></br>
            <Link as={NextLink} href={'/principles'} variant="emphasis">
              Les mer om oss og hvordan vi jobber
            </Link>
          </Text>
        </Container>
      </Box>
    </Grid>
  </Layout>
);
export default Home;
