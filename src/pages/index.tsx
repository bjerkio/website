import type { NextPage } from 'next';
import { NavLink } from 'next-theme-ui';
import { Box, Card, Container, Flex, Grid, Heading, Image, Paragraph, Text } from 'theme-ui';
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
      <Flex sx={{
        alignItems: 'stretch',
        width:'100%', 
        flex: '1 0 100%',
        flexDirection: 'column'
      }}>
        <Container variant='full' backgroundColor={'green100'}>
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
              
                <Grid
                  columns={['repeat(2, 1fr)']}
                  gap={0}
                  sx={{ 
                    justifyItems: 'center',
                    marginLeft: 'auto'
                }}
                >
                  <Container variant='readable'>
                  <Text variant='excerpt'>Folio</Text>
                  <Text variant='excerpt' sx={{}}>Layer</Text>
                  <Text variant='excerpt' sx={{}}>Grid branding</Text>
                  </Container>
                  <Image src={'Logo1.svg'} sx={{}}></Image>
                  <Text variant='excerpt' sx={{}}>Avfall Norge</Text>
                  <Text variant='excerpt' sx={{}}>DNB</Text>
                  <Text variant='excerpt' sx={{}}>Digdir</Text>
                </Grid>
        </Container>
  
      <Container variant='background2' marginBottom='-40px'>
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
      </Flex>
    </Layout>
  );
};

export default Home;
