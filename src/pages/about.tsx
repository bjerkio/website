import {
    Box,
    Container,
    Flex,
    Grid,
    Heading,
    Link,
    Text,
  } from '@chakra-ui/react';
import { ContactPerson } from '../components/layout/about/contact-person';
import { BackgroundGraphic } from '../components/layout/background-graphic';
import { Layout } from '../components/layout/layout';
import { PageSection } from '../components/layout/page-section';
import NextLink from 'next/link'; 
import React from 'react';
  
const About: React.FC = () => {
    return (
      <Layout>
        <PageSection>
          <BackgroundGraphic
            element="element2"
            positionx="left"
            positiony="58rem"
          />
  
          <Container variant="readable">
            <Flex flexDirection="column" gap={5}>
            <Text textStyle='titleNoBold'>
              Bjerk er skapt for å forbedre og forenkle måten mennesker lærer,
              tenker, jobber og kommuniserer på.
            </Text>
            <Text textStyle='standard'>
              For oss, er det viktigste vi gjør er å bidra til at hverdagen til
              mennesker blir bedre, at vi kan oppnå mer. Vi elsker å skape - og
              kombinasjonen av å få skape noe, som også har positiv påvirkning for
              de menneskene vi jobber med er det som motiverer oss.
            </Text>
            <Box
              sx={{
                pb: 8,
              }}
            >
              <Link 
              as={NextLink}
              href={'/principles'} 
              variant='socials'>
                Les mer om hvordan vi jobber
              </Link>
            </Box>
            </Flex>
            <Grid
              templateColumns={{ base:'1fr', md:'29rem 29rem' }}
              sx={{
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
              <ContactPerson
                name={'Anna Christina Lyra'}
                photoPath={'/persons/christina.jpg'}
                phone={'+47 936 86 056'}
                email={'christina@bjerk.io'}
                title={'Markedsføringssjef'}
                github={'https://github.com/ChristinaLyra'}
                linkedIn={'https://www.linkedin.com/in/annachristinalyra/'}
              />
            </Grid>

            <Flex flexDirection='column' pt={{ base:5, md:8 }} gap={3}>
              <Text textStyle='standard'>
                Besøk oss i Myntgata 2, 0152 Oslo
              </Text>
              <Flex flexDirection='column'>
              <Text
                textStyle='standard'
                fontWeight='semibold'
              >
                kontoret@bjerk.io
              </Text>
              <Text
                textStyle='standard'
                fontWeight='semibold'
              >
                +47 22 12 05 12
              </Text>
              </Flex>
            </Flex>
          </Container>
          <BackgroundGraphic
            element="element3"
            positionx="right"
            positiony="236rem"
          />
        </PageSection>
      </Layout>
    );
  };
  
  export default About;
  
