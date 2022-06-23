import type { NextPage } from 'next';
import { Link } from 'next-theme-ui';
import { Box, Card, Grid, Heading, Image, Paragraph, Text, Container } from 'theme-ui';
import { Layout } from '../components/layout/layout';
const customers = [
  'folio',
  'digdir',
  'avfall-norge',
  'layer',
  'dnb',
];

const Home: NextPage = () => {
  return (
    <Layout>
      <Container variant='readable'>
        <Grid sx={{ gap: 5 }}>
          <Grid sx={{ gap: 3 }}>
            <Heading variant="title">
              Vår lidenskap er å skape
            </Heading>
            <Paragraph variant='standard'>
              De siste 12 årene har vi forbedret og forenklet måten mennesker
              lærer, tenker, jobber, og kommuniserer på gjennom å utvikle og
              tilpasse programvare. Vi utvikler, integrerer, kobler sammen, rådgir og samarbeider med
              deg om å lage produkter og tekniske løsninger.
            </Paragraph>
          </Grid>

          <Grid>
              <Text variant="subtitle">Noen av våre seneste kunder</Text>
          </Grid>
          <Grid
            columns={['repeat(3, 1fr)']}
            gap={3}
            sx={{ justifyItems: 'left' }}
          >
            <Text variant='excerpt'>Folio</Text>
            <Text variant='excerpt'>Layer</Text>
            <Text variant='excerpt'>Grid branding</Text>
            <Text variant='excerpt'>Avfall Norge</Text>
            <Text variant='excerpt'>DNB</Text>
            <Text variant='excerpt'>Digdir</Text>

          </Grid>
        </Grid>
      </Container>

      
      <Image></Image>
      <Container variant='full'>
        <Card>
            <Grid gap={1}>
              <Text variant="subtitle">Våre prinsipper og metoder</Text>
              <Heading>
                Kompetanse og teknologi, kombinert med et brukervennlig design
              </Heading>
            </Grid>
            <Paragraph>
              Samarbeid, samspill, programvare som virker, iterativ utvikling,
              kontinuitet, gode insentiver og Super Mario-effekten er noe av det
              vi mener kreves for å lykkes.
            </Paragraph>
            <Link href={'/principles'}>Les om våre prinsipper</Link>
          </Card>
        <Image></Image>
      </Container>
    </Layout>
  );
};

export default Home;
