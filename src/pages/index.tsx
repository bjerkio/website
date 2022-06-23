import type { NextPage } from 'next';
import { NavLink } from 'next-theme-ui';
import { Box, Card, Flex, Grid, Heading, Image, Paragraph, Text, Container } from 'theme-ui';
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
      <Container variant='full'>
        <Container variant='readable'>
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

            <Grid sx={{ marginTop: '100px'}}>
                <Text variant="subtitle">Noen av våre seneste kunder</Text>
            </Grid>
          </Container>
            <Grid>
              <Grid
                variant='readable'
                columns={['repeat(4, 1fr)']}
                gap={0}
                sx={{ 
                  justifyItems: 'left',
                  marginLeft: '325px'
               }}
              >
                <Text variant='excerpt'>Folio</Text>
                <Text variant='excerpt' sx={{marginLeft:'-40px'}}>Layer</Text>
                <Text variant='excerpt' sx={{marginLeft:'-150px'}}>Grid branding</Text>
                <Image src={'Logo1.svg'} sx={{marginLeft: 'auto', marginTop: '-60px'}}></Image>
                <Text variant='excerpt' sx={{marginTop: '-40px'}}>Avfall Norge</Text>
                <Text variant='excerpt' sx={{ marginLeft:'-40px', marginTop: '-40px'}}>DNB</Text>
                <Text variant='excerpt' sx={{ marginLeft:'-150px', marginTop: '-40px'}}>Digdir</Text>

              </Grid>
              
              
         </Grid>
        
      </Container>
      <Image></Image>
      <Container variant='background2' backgroundColor={'soothing'} marginBottom='-40px'>
        <Flex sx={{
          paddingTop: '150px'
        }}>
          <Image src='Logo2.svg' width='550px'></Image>
            <Flex>
                <Paragraph variant='standard' sx={{
                  paddingRight: '400px',
                  paddingLeft: '60px',
                  paddingTop: '50px',
                }}>
                  Samarbeid, samspill, programvare som virker, iterativ utvikling,
                  kontinuitet, gode insentiver og Super Mario-effekten er noe av det
                  vi mener kreves for å lykkes. <br></br>
                  <NavLink href={'/principles'}
                  sx={{
                    color: 'blue100',
                    fontWeight: 600,
                    fontFamily: 'Sora',
                    fontSize: '20px',
                    letterSpacing: -0.02,
                    lineHeight: '27px',
                    paddingTop: '20px',
                    cursor: 'pointer',
                  }}>
                    Les mer om oss og hvordan vi jobber
                  </NavLink>
                </Paragraph>
                
                  
                </Flex>
            <Image></Image>

        </Flex>
      </Container>
    </Layout>
  );
};

export default Home;
