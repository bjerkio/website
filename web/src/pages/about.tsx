import { Box, Button, Grid, Heading, Label } from '@theme-ui/components';
import { navigate, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { AboutList } from '../components/about-page/about-list';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';

const loc = 'no';

// TODO: fix image showing when Sanity will be done

export const query = graphql`
query MyQuery {
  allSanityAboutPage {
    nodes {
      title {
        en
        no
      }
      boxes {
        description {
          enText {
            children {
              text
            }
          }
          noText {
            children {
              text
            }
          }
        }
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        title {
          en
          no
        }
      }
      bottomBox {
        buttonText {
          en
          no
        }
        description {
          enText {
            children {
              text
            }
          }
          noText {
            children {
              text
            }
          }
        }
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        linkTo
      }
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
}
`

export default ({ data }) => {
  const item = data.allSanityAboutPage.nodes[0]
  if(data && data.allSanityAboutPage && item)
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
            {item.title[loc]}
          </Heading>
          <AboutList
            data={item.boxes.map((box, i) => ({
              title: box.title[loc],
              descriptionArray: box.description[`${loc}Text`].map(par => par.children[0].text),
              textAlign: i&1 ? 'right' : 'left',
              image: box.image.asset.fluid
            }))}
          />
          <Box pt={6} sx={{ width: '100%', height: 'auto' }}>
            <Img fluid={item.image.asset.fluid} durationFadeIn={0} fadeIn={false} draggable={false} />
          </Box>
          <Grid gap={5} columns={[1, 1, 2]} px={5} pt={6}>
            <Box>
              <Img
                fluid={item.bottomBox.image.asset.fluid}
                durationFadeIn={0}
                fadeIn={false}
                draggable={false}
              />
            </Box>
            <Box>
              <Label sx={{ fontSize: '1.4rem' }}>
                {item.bottomBox.description[`${loc}Text`].map(par => par.children[0].text).join('\n')}
              </Label>
              <Button variant="empty" onClick={() => navigate(`/${item.bottomBox.linkTo.split(/\/(.+)/)[1]}`)} my={3}>
                {item.bottomBox.buttonText[loc]}
              </Button>
            </Box>
          </Grid>
        </Container>
      </Layout>)
  return ''
}