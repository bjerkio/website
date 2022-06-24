import { Link } from 'next-theme-ui';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Paragraph,
  Text,
} from 'theme-ui';
import { ContactPerson } from '../components/about/contact-person';
import { ContainerWithBackground } from '../components/container-with-background';
import { Layout } from '../components/layout/layout';

const About: React.FC = () => {
  return (
    <Layout>
      <Grid sx={{ width: '100%' }}>
        <ContainerWithBackground>
          <Heading variant="titlenobold" sx={{ pb: '40px' }}>
            Bjerk er skapt for å forbedre og forenkle måten mennesker lærer,
            tenker, jobber og kommuniserer på.
          </Heading>
          <Paragraph variant="standard" sx={{ pb: '40px' }}>
            For oss, er det viktigste vi gjør er å bidra til at hverdagen til
            mennesker blir bedre, at vi kan oppnå mer. Vi elsker å skape - og
            kombinasjonen av å få skape noe, som også har positiv påvirkning for
            de menneskene vi jobber med er det som motiverer oss.
          </Paragraph>
          <Box
            sx={{
              fontSize: 4,
              pb: '120px',
            }}
          >
            <Link href={'/principles'}>Les mer om hvordan vi jobber</Link>
          </Box>
          <Box sx={{ position: 'relative' }}>
            <Image
              src={'/Logo2.svg'}
              sx={{
                position: 'absolute',
                width: '298px',
                right: '1055px',
                bottom: '-500px',
              }}
            />
          </Box>
          <Flex
            sx={{
              flexDirection: ['column', 'row'],
              flexWrap: ['nowrap', 'wrap'],
              gap: 3,
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
              linkedIn={'https://www.linkedin.com/in/thomasbrustad/'}
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
          <Box sx={{ position: 'relative' }}>
            <Image
              src={'/Logo3.svg'}
              sx={{
                position: 'absolute',
                width: '453px',
                left: '850px',
                bottom: '-175px',
              }}
            />
          </Box>
          <Grid sx={{ gap: 1 }}>
            <Text variant="standard" pb='15px'>Besøk oss i Myntgata 2, 0152 Oslo.</Text>
            <Text variant="standard" sx={{ fontWeight: 600 }}>kontoret@bjerk.io</Text>
            <Text variant='standard' sx={{ fontWeight: 600 }}>+47 22 12 05 12</Text>
          </Grid>
        </ContainerWithBackground>
      </Grid>
    </Layout>
  );
};

export default About;
