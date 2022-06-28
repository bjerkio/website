import type { NextPage } from 'next';
import { Link } from 'next-theme-ui';
import { Box, Flex, Grid, Heading, Image, Paragraph, Text } from 'theme-ui';
import { ContainerWithBackground } from '../components/container-with-background';
import { Layout } from '../components/layout/layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid sx={{ width: '100%' }}>
        <ContainerWithBackground color="green" element='element1'>
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

          <Flex
            sx={{ flexDirection: 'column', width: '80%', paddingTop: '100px' }}
          >
            <Text variant="subtitle">Noen av våre seneste kunder</Text>
            <Grid
              columns={['1fr 1fr 2fr']}
              gap={4}
              sx={{
                justifyItems: 'Left',
                alignItems: 'center',
                paddingTop: '40px',
              }}
            >
              <Text variant="excerpt">Folio</Text>
              <Text variant="excerpt" sx={{}}>
                Layer
              </Text>
              <Text variant="excerpt" sx={{}}>
                Grid branding
              </Text>

              <Text variant="excerpt" sx={{}}>
                DNB
              </Text>
              <Text variant="excerpt" sx={{}}>
                Digdir
              </Text>
              <Text variant="excerpt" sx={{}}>
                Avfall Norge
              </Text>
            </Grid>
          </Flex>
        </ContainerWithBackground>

        <ContainerWithBackground color="beige">
          <Box sx={{ position: 'relative' }}>
            <Image
              src={'/element2.svg'}
              sx={{
                position: 'absolute',
                width: '298px',
                left: '-388px',
                bottom: '-220px',
              }}
            />
          </Box>
          <Paragraph variant="standard">
            Samarbeid, samspill, programvare som virker, iterativ utvikling,
            kontinuitet, gode insentiver og Super Mario-effekten er noe av det
            vi mener kreves for å lykkes. <br></br>
            <Box
              sx={{
                paddingTop: '20px',
                fontSize: 3,
              }}
            >
              <Link href={'/principles'}>
                Les mer om oss og hvordan vi jobber
              </Link>
            </Box>
          </Paragraph>
        </ContainerWithBackground>
      </Grid>
    </Layout>
  );
};

export default Home;
