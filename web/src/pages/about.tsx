import { Box, Button, Grid, Heading, Label } from '@theme-ui/components';
import { graphql, navigate, useStaticQuery } from 'gatsby';
import React from 'react';
import { AboutList } from '../components/about-page/about-list';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

const AboutPage: React.FC = () => {
  const {
    allMdx: { edges },
  } = useStaticQuery(graphql`
    query AboutQuery {
      allMdx(
        filter: { frontmatter: { type: { eq: "about-articles" } } }
        sort: { fields: [frontmatter___id], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              descriptionArray
              image
              title
            }
          }
        }
      }
    }
  `);

  const boxesData = edges.map((edge) => edge.node.frontmatter);

  return (
    <Layout>
      <Container>
        <Heading
          as="h1"
          sx={{
            fontWeight: 'normal',
            width: ['100%', '60%'],
            my: 5,
          }}
        >
          Slik forvandler vi i Bjerk dine gode ideer om til unike opplevelser.
        </Heading>
        <AboutList
          data={boxesData.map((item, index) => ({
            ...item,
            textAlign: index & 1 ? 'right' : 'left',
          }))}
        />
        <Box pt={6} sx={{ width: '100%', height: 'auto' }}>
          <img src="../AboutSplit.png" style={{ width: '100%' }} />
        </Box>
        <Grid gap={5} columns={[1, 1, 2]} px={5} pt={6}>
          <Box>
            <img src="../SimenBjorn.png" style={{ width: '100%' }} />
          </Box>
          <Box>
            <Label sx={{ fontSize: '1.4rem' }}>
              Bjerk sine røtter går tilbake til 2009, da Simen begynte å jobbe
              for seg selv. På sin reise traff han Bjørn Niklas og sammen har de
              startet Bjerk. Et lite privat konsulenthus med lidenskap for
              service og kvalitet.
            </Label>
            <Button
              variant="empty"
              onClick={() => navigate('/services')}
              my={3}
              sx={{
                fontFamily: 'TTCommons !important'
              }}
            >
              Sjekk hva vi kan gjøre for deg
            </Button>
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export default AboutPage;
