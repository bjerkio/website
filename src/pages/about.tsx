import { Link } from 'next-theme-ui';
import { Grid, Heading, Link as ThemeUILink, Paragraph, Text } from 'theme-ui';
import { Layout } from '../components/layout/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Grid sx={{ gap: 5 }}>
        <Grid sx={{ gap: 3 }}>
          <Heading variant="title">Om oss</Heading>
          <Paragraph variant="excerpt">
            Bjerk er skapt for å forbedre og forenkle måten mennesker lærer,
            tenker, jobber og kommuniserer på.
          </Paragraph>
          <Paragraph>
            For oss, er det viktigste vi gjør er å bidra til at hverdagen til
            mennesker blir bedre, at vi kan oppnå mer.
          </Paragraph>
          <Paragraph>
            Vi elsker å skape – og kombinasjonen av å få skape noe, som også har
            positiv påvirkning for de menneskene vi jobber med er det som
            motiverer oss.
          </Paragraph>

          <Link href={'/principles'}>Les om våre prinsipper →</Link>
        </Grid>
        <Grid sx={{ gap: 3 }}>
          <Heading>Åpen kildekode</Heading>
          <Paragraph>
            Ved å dele erfaringer, diskutere og arbeide åpent mener vi at
            teknologi blir bedre. Derfor ligger Bjerk på listen over verdens
            største selskaper på åpen kildekode.
          </Paragraph>
          <Paragraph sx={{ fontWeight: 'bold' }}>
            For deg som kunde betyr det at du indirekte bidrar til å skape et
            bedre samfunn, men også betydelig bedre programvare.
          </Paragraph>
          <Link href={''}>Sjekk vår Github-profil →</Link>
        </Grid>

        <Grid sx={{ gap: 3 }}>
          <Heading>
            Besøk oss i <br />
            <Text sx={{ textDecoration: 'underline' }}>
              Myntgata 2, 0152 Oslo.
            </Text>
          </Heading>
          <Grid columns={['1fr 4fr', '1fr 10fr']} sx={{ gap: 2 }}>
            <Text sx={{ fontWeight: 'bold' }}>Telefon</Text>

            <ThemeUILink href={'tel:+4722120512'}>+47 22 12 05 12</ThemeUILink>

            <Text sx={{ fontWeight: 'bold' }}>E-post</Text>
            <ThemeUILink href={'mailto:kontoret@bjerk.io'}>
              kontoret@bjerk.io
            </ThemeUILink>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default About;
