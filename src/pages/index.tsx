import type { NextPage } from 'next';
import { Link } from 'next-theme-ui';
import { Box, Card, Grid, Heading, Image, Paragraph, Text } from 'theme-ui';
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
      <Grid sx={{ gap: 5 }}>
        <Grid sx={{ gap: 4 }}>
          <Heading variant="title">
            Vår lidenskap er å skape
          </Heading>
          <Paragraph>
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
          gap={0}
          sx={{ justifyItems: 'left' }}
        >
          <Text>Folio</Text>
          <Text>Layer</Text>
          <Text>Grid branding</Text>
          <Text>Avfall Norge</Text>
          <Text>DNB</Text>
          <Text>Digdir</Text>
        </Grid>
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

      </Grid>
    </Layout>
  );
};

export default Home;
