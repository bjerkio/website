/** @jsx */
import { Box, Heading, Label } from '@theme-ui/components';
import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Container } from '../../components/container';
import { Layout } from '../../components/layouts';
const loc = 'no';

export const query = graphql`
query tabetaltQuery {
    allSanityTabetaltPage {
      nodes {
        tabetaltInfo {
          title {
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
        }
        tabetaltBottomImage {
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
  const item = data.allSanityTabetaltPage.nodes[data.allSanityTabetaltPage.nodes.length - 1]
  if(data && data.allSanityTabetaltPage && item)
    return (
      <Layout>
        <Box>
          <Container sx={{ pt: 6 }}>
            <Heading as="h1" sx={{ mb: 3, fontWeight: 'normal' }}>
              {item.tabetaltInfo.title[loc]}
            </Heading>
            <Box sx={{ mt: 4 }}>
                <Img
                    fluid={item.tabetaltInfo.image.asset.fluid}
                    durationFadeIn={0}
                    fadeIn={false}
                    draggable={false}
                />
            </Box>
            <Heading as="h2" sx={{ mt: 5, mb: 6, fontWeight: 'normal', marginRight: '25%', marginLeft: '25%' }}>
              {item.tabetaltInfo.description[`${loc}Text`].map(par => par.children[0].text).join('\n')}
            </Heading>
            <Box>
                <Img
                    fluid={item.tabetaltBottomImage.asset.fluid}
                    durationFadeIn={0}
                    fadeIn={false}
                    draggable={false}
                />
            </Box>
          </Container>
        </Box>
      </Layout>)
  return ''
};
