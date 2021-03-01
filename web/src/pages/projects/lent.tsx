/** @jsx */
import { Box, Heading } from '@theme-ui/components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import { Container } from '../../components/container';
import { Layout } from '../../components/layouts';

export const query = graphql`
  query lentQuery {
    allSanityLentPage {
      nodes {
        lentInfo {
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

export default ({ data: { allSanityLentPage } }) => {
  const [loc, setLoc] = useState('no');
  useEffect(() => {
    setLoc(window.location.href.split('/')[3]);
  }, []);

  const item = allSanityLentPage.nodes[allSanityLentPage.nodes.length - 1];
  if (item && loc)
    return (
      <Layout>
        <Box>
          <Container sx={{ pt: 6, alignItems: 'center' }}>
            <Heading as="h1" sx={{ mb: 3, fontWeight: 'normal' }}>
              {item.lentInfo.title[loc]}
            </Heading>
            <Box sx={{ mt: 4 }}>
              <Img
                fluid={item.lentInfo.image.asset.fluid}
                durationFadeIn={0}
                fadeIn={false}
                draggable={false}
              />
            </Box>
            {item.lentInfo.description[`${loc}Text`].map((par, index) => (
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
