/** @jsx */
import { Box, Heading } from '@theme-ui/components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layouts';

export const query = graphql`
  query indivQuery {
    allSanityIndivPage {
      nodes {
        indivInfo {
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
      }
    }
  }
`;

export default ({ data: { allSanityIndivPage } }) => {
  const [loc, setLoc] = useState('no');
  useEffect(() => {
    setLoc(window.location.href.split('/')[3]);
  }, []);

  const item = allSanityIndivPage.nodes[allSanityIndivPage.nodes.length - 1];
  if (item)
    return (
      <Layout>
        <Box>
          <Container sx={{ pt: 6, alignItems: 'center' }}>
            <Heading as="h1" sx={{ mb: 3, fontWeight: 'normal' }}>
              {item.indivInfo.title[loc]}
            </Heading>
            <Box sx={{ mt: 4 }}>
              <Img
                fluid={item.indivInfo.image.asset.fluid}
                durationFadeIn={0}
                fadeIn={false}
                draggable={false}
              />
            </Box>
            {item.indivInfo.description[`${loc}Text`].map((par, index) => (
              <Heading
                key={index}
                as="h2"
                sx={{
                  mt: 5,
                  mb: 3,
                  fontWeight: 'normal',
                  marginLeft: '25%',
                  marginRight: '25%',
                }}
              >
                {par.children[0].text}
              </Heading>
            ))}
          </Container>
        </Box>
      </Layout>
    );
  return '';
};
