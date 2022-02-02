import type { NextPage } from 'next';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  Heading,
  Image,
  Link,
  Paragraph,
  Text,
} from 'theme-ui';
// import { Image } from 'next-theme-ui';
import { Logo } from '../components/logo';
import { SEO } from '../components/seo';

const customers = [
  'avfall-norge',
  'folio',
  'digdir',
  'grid-branding',
  'layer',
  'dnb',
];

const Home: NextPage = () => {
  return (
    <Container variant="filled">
      <SEO />
      <Container variant="readable">
        <Grid sx={{ gap: 7, p: 4 }}>
          <Logo sx={{ maxWidth: '100px' }} />
          <Grid sx={{ gap: 4 }}>
            <Heading variant="title">
              Vår lidenskap
              <br /> er å skape
            </Heading>
            <Paragraph>
              Ved å gjøre informasjon mer tilgjengelig og tørre å bryte med det
              etablerte tror vi mennesker kan oppnå sitt potensiale.
            </Paragraph>
            <Box>
              <Button>Les mer om oss</Button>
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
            <Link sx={{ color: 'black100' }}>Les om våre prinsipper</Link>
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
      </Container>
    </Container>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
