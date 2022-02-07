import type { NextPage } from 'next';
import Image from 'next/image';
import {
  Box,
  Button,
  Card,
  Grid,
  Heading,
  Link,
  Paragraph,
  Text,
} from 'theme-ui';
import { ImageWrapper } from '../components/image-wrapper';
import { Layout } from '../components/layout/layout';
import { imageLoader } from '../lib/image-loader';
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
          kontinuitet, gode insentiver og Super Mario-effekten er noe av det vi
          mener kreves for å lykkes.
        </Paragraph>
        <Link sx={{ color: 'black100' }}>Les om våre prinsipper</Link>
      </Card>
      <Grid
        columns={['repeat(3, 1fr)']}
        gap={4}
        sx={{ justifyItems: 'center' }}
      >
        {customers.map(customer => (
          <ImageWrapper>
            <Image
              key={customer}
              src={`/customers/${customer}.svg`}
              layout="fill"
              loader={imageLoader}
            />
          </ImageWrapper>
        ))}
      </Grid>
    </Layout>
  );
};

// eslint-disable-next-line import/no-default-export
export default Home;
