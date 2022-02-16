import type { NextPage } from 'next';
import { Link } from 'next-theme-ui';
import { Box, Card, Grid, Heading, Image, Paragraph, Text } from 'theme-ui';
import { Layout } from '../components/layout/layout';
const customers = [
  'grid-branding',
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
            Vår lidenskap
            <br /> er å skape
          </Heading>
          <Paragraph>
            Vi er til for å forbedre og forenkle måten mennesker lærer, tenker,
            jobber, og kommuniserer på.
          </Paragraph>
          <Box>
            <Link
              href={'/about'}
              sx={{ textDecoration: 'none', variant: 'links.buttonLink' }}
            >
              Les mer om oss
            </Link>
          </Box>
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
        <Grid
          columns={['repeat(3, 1fr)']}
          gap={4}
          sx={{ justifyItems: 'center' }}
        >
          {customers.map(customer => (
            <Image
              key={customer}
              src={`/customers/${customer}.svg`}
              height="43"
            />
          ))}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
