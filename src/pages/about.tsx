import { Link } from 'next-theme-ui';
import {
  Flex,
  Grid,
  Heading,
  Paragraph,
  Text,
  Link as ThemeUILink,
} from 'theme-ui';
import { ContactPerson } from '../components/about/contact-person';
import { Booking } from '../components/booking';
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
            Det viktigste vi gjør er for oss å bidra til at hverdagen til
            mennesker blir bedre, slik at vi som samfunn kan oppnå mer.
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
          <ThemeUILink href={'https://github.com/bjerkio'} target={'_blank'}>
            Sjekk vår Github-profil →
          </ThemeUILink>
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
        <Booking label={'Sett opp et møte med oss'} />
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            flexWrap: ['nowrap', 'wrap'],
            gap: 2,
          }}
        >
          <ContactPerson
            name={'Brage Sekse Aarset'}
            photoPath={'/persons/brage.png'}
            phone={'+47 464 65 823'}
            email={'brage@bjerk.io'}
            title={'Programvareutvikler'}
            github={'https://github.com/braaar'}
            linkedIn={'https://www.linkedin.com/in/braaar/'}
          />
          <ContactPerson
            name={'Simen A. W. Olsen'}
            photoPath={'/persons/simen.jpg'}
            phone={'+47 953 08 087'}
            email={'so@bjerk.io'}
            title={'Daglig leder / Programvareutvikler'}
            github={'https://github.com/cobraz'}
            linkedIn={'https://www.linkedin.com/in/cobraz/'}
          />
          <ContactPerson
            name={'Bjørn Niklas Sjøstrøm'}
            photoPath={'/persons/bns.jpg'}
            phone={'+47 905 86 616'}
            email={'bns@bjerk.io'}
            title={'Rådgiver'}
            linkedIn={
              'https://www.linkedin.com/in/bj%C3%B8rn-niklas-sj%C3%B8str%C3%B8m-8043277/'
            }
          />
          <ContactPerson
            name={'Thomas Brustad'}
            photoPath={'/persons/thomas.jpg'}
            phone={'+47 402 86 277'}
            email={'thomas@bjerk.io'}
            title={'Rådgiver'}
            linkedIn={
              'https://www.linkedin.com/in/thomasbrustad/'
            }
          />
          <ContactPerson
            name={'Markus Moripen'}
            photoPath={'/persons/markus.jpg'}
            phone={'+47 970 30 084'}
            email={'markus@bjerk.io'}
            title={'Programvareutvikler'}
            github={'https://github.com/CalculatedCode'}
            />
        </Flex>
      </Grid>
    </Layout>
  );
};

export default About;
