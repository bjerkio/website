/** @jsx */
import { Box, Grid, Heading, Label } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import Button from '../components/button';
import { graphql } from 'gatsby';
import { Container } from '../components/container';
import CallToActionBox from '../components/home-page/call-to-action-box';
import CallToActionImage from '../components/home-page/call-to-action-image';
import IntroVideo from '../components/home-page/intro-video';
import { Layout } from '../components/layouts';

export const query = graphql`
query homePageQuery {
  allSanityHomepage {
    nodes {
      headerButtonLink
      headerVideoUrl
      headerButtonText {
        en
        no
      }
      headerText {
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
      ctaBoxes {
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        linkTo
        title {
          en
          no
        }
        hoverImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
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
        bottomText {
          en
          no
        }
      }
      homePageTopTitle {
        en
        no
      }
      homePageTopDescription {
        noText {
          children {
            text
          }
        }
        enText {
          children {
            text
          }
        }
      }
      homePageMiddleTitle {
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
      ctaImages {
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
        linkText {
          en
          no
        }
        linkTo
      }
    }
  }
}
`

export default ({ data }) => {
  
  const [loc, setLoc] = useState('no')
  useEffect(() => {
    setLoc(window.location.href.split('/')[3])
  }, []);

  const item = data.allSanityHomepage.nodes[data.allSanityHomepage.nodes.length - 1]
  if(data && data.allSanityHomepage && item && loc)
    return (
      <Layout>
        <Box>
          <IntroVideo
            data={{
              videoUrl: item.headerVideoUrl,
              videoTitle: null,
            }}
          >
            <Box sx={{ fontSize: 'clamp(16px, 8vw, 38px)' }}>
              <Label sx={{ fontWeight: 'normal' }}>
                {item.headerText[`${loc}Text`].map(par => par.children[0].text).join('\n')}
              </Label>
              <Button href={'/'+item.headerButtonLink.split(/\/(.+)/)[1]}>
                {item.headerButtonText[loc]}
              </Button>
            </Box>
          </IntroVideo>
          <Container sx={{ pt: 6 }}>
            <Heading as="h1" sx={{ mb: 3, fontWeight: 'normal' }}>
              {item.homePageTopTitle[loc]}
            </Heading>
            <Box sx={{ width: '60%' }}>
              {item.homePageTopDescription[`${loc}Text`].map(par => par.children[0].text).join('\n')}
            </Box>
            <Grid
              pt={5}
              sx={{
                gap: 3,
                gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
              }}
            >
              {item.ctaBoxes.map((ctabox, index) => (
                <CallToActionBox 
                  key={index}
                  data={{
                    title: ctabox.title[loc],
                    linkTo: '/' + ctabox.linkTo.split(/\/(.+)/)[1],
                    linkText: ctabox.bottomText[loc],
                    image: ctabox.image,
                    hoverImage: ctabox.hoverImage
                  }} 
                >
                  {ctabox.description[`${loc}Text`].map(par => par.children[0].text).join('\n')}
                </CallToActionBox>
              ))}
            </Grid>
          </Container>
          <Container>
            <Box sx={{ fontSize: 'clamp(16px, 8vw, 38px)' }}>
              <Label sx={{ fontWeight: 'normal' }}>
                {item.homePageMiddleTitle[`${loc}Text`].map(par => par.children[0].text).join('\n')}
              </Label>
            </Box>
            {item.ctaImages.map((ctaimage, index) => (
              <CallToActionImage
                key={index}
                data={{
                  linkTo: '/' + ctaimage.linkTo.split(/\/(.+)/)[1],
                  linkText: ctaimage.linkText[loc],
                  image: ctaimage.image
                }}
              />
            ))}
          </Container>
        </Box>
      </Layout>)
  return ''
};
