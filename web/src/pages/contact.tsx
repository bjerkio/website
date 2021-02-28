import { Box, Flex, Heading, Label, Link } from '@theme-ui/components';
import React from 'react';
import { SystemStyleObject } from 'theme-ui';
import Img from 'gatsby-image';
import { EmployeeList } from '../components/contact/employee-list';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';
const loc = 'no';

const styles: SystemStyleObject = {
  '.image': {
    width: '20rem',
    height: '20rem',
    maxWidth: '396px',
    maxHeight: '328px',
    right: '20rem',
    marginTop: '4rem',
    display: ['none', 'none', 'block'],
  },
  '.mobileImage': {
    width: '20rem',
    display: ['block', 'block', 'none'],
  },
};

export const query = graphql`
query contactQuery {
  allSanityContactPage {
    nodes {
      mainBox {
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
              marks
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
      boxes {
        description {
          enText {
            children {
              text
              marks
            }
          }
          noText {
            children {
              text
              marks
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

`

// TODO: replace image with gatsby-image when sanity will done
export default ({ data }) => {
  const item = data.allSanityContactPage.nodes[data.allSanityContactPage.nodes.length - 1]
  if(data && data.allSanityContactPage && item)
    return (
      <Layout>
        <Container>
          <Box px={0} sx={styles}>
            <Flex>
              <Box>
                <Heading
                  as="h1"
                  sx={{
                    fontWeight: 'normal',
                    width: ['100%', '60%'],
                    my: 5,
                  }}
                >
                  {item.mainBox.title[loc]}
                </Heading>
                <Flex>
                  <Box
                    sx={{
                      fontSize: [2, 3, 3],
                    }}
                  >
                    {item.mainBox.description[`${loc}Text`].map(par => par.children[0]).map(({ text, marks }) =>
                      marks && marks.length > 0 && marks[0] && marks[0] === 'underline'   // TODO: create parser for marks property
                        ? <Link sx={{ color: 'black' }}>{text}</Link>
                        : <Label>{text}</Label>
                    )}
                  </Box>
                  <Box className="mobileImage">
                    <Img
                      fluid={item.mainBox.image.asset.fluid}
                      durationFadeIn={0}
                      fadeIn={false}
                      draggable={false}
                    />
                  </Box>
                </Flex>
              </Box>
              <Box className="image">
                <Img
                  fluid={item.mainBox.image.asset.fluid}
                  durationFadeIn={0}
                  fadeIn={false}
                  draggable={false}
                />
              </Box>
            </Flex>
            <EmployeeList
              data={item.boxes.map(box => ({    // TODO: create parser for these types
                name: box.description[`${loc}Text`].map(par => par.children[0].text)[0],
                position: box.description[`${loc}Text`].map(par => par.children[0].text)[1],
                email: box.description[`${loc}Text`].map(par => par.children[0].text)[2],
                phoneNumber: box.description[`${loc}Text`].map(par => par.children[0].text)[3],
                photo: box.image.asset.fluid
              }))}
            />
          </Box>
        </Container>
      </Layout>
    );
  return ''
};