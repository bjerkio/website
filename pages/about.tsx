import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Text,
} from '@chakra-ui/react';
import { ContactPerson } from '../components/about/contact-person';
import { BackgroundGraphic } from '../components/background-graphic';
import { Layout } from '../components/layout/layout';
import { PageSection } from '../components/page-section';

const About: React.FC = () => {
  return (
    <Layout>
      <PageSection>
        <BackgroundGraphic
          element="element2"
          positionx="left"
          positiony="1040px"
        />

        <Container variant="readable">
          <Text textStyle={{base:"titlenobold"}} >
            Bjerk er skapt for å forbedre og forenkle måten mennesker lærer,
            tenker, jobber og kommuniserer på.
          </Text>
          <Text textStyle={{base:"standard"}} sx={{ py: 5 }}>
            For oss, er det viktigste vi gjør er å bidra til at hverdagen til
            mennesker blir bedre, at vi kan oppnå mer. Vi elsker å skape - og
            kombinasjonen av å få skape noe, som også har positiv påvirkning for
            de menneskene vi jobber med er det som motiverer oss.
          </Text>
          <Box
            sx={{
              fontSize: [2, 4],
              pb: '120px',
            }}
          >
            <Link href={'/principles'} variant={{base: "primary"}}>
              Les mer om hvordan vi jobber
            </Link>
          </Box>

          <Flex
            sx={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 5,
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
              github={'https://github.com/moripen'}
              linkedIn={'https://www.linkedin.com/in/moripen/'}
            />
            <ContactPerson
              name={'Simon Rugland'}
              photoPath={'/persons/simon.jpg'}
              phone={'+47 474 46 841'}
              email={'js@bjerk.io'}
              title={'Programvareutvikler'}
              github={'https://github.com/simonrugland'}
              linkedIn={'https://www.linkedin.com/in/simon-rugland/'}
            />
          </Flex>

          <Grid sx={{ gap: 1 }}>
            <Text textStyle={{base:"standard"}} pb="15px">
              Besøk oss i Myntgata 2, 0152 Oslo
            </Text>
            <Text textStyle={{base:"standard"}} sx={{ fontWeight: 'semibold' }}>
              kontoret@bjerk.io
            </Text>
            <Text textStyle={{base:"standard"}} sx={{ fontWeight: 'semibold' }}>
              +47 22 12 05 12
            </Text>
          </Grid>
        </Container>
        <BackgroundGraphic
          element="element3"
          positionx="right"
          positiony="3080px"
        />
      </PageSection>
    </Layout>
  );
};

export default About;
