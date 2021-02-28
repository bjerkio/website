import * as React from 'react';
import { graphql } from 'gatsby';
import { Heading } from 'theme-ui';
import { Container } from '../components/container';
import { Layout } from '../components/layouts';
import { ServiceList } from '../components/services-page/service-list';
const loc = 'no';

export const query = graphql`
query services {
  allSanityServicesPage {
    nodes {
      title {
        en
        no
      }
      boxes {
        title {
          en
          no
        }
        image {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
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
        linkTo
      }
      firstImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      secondImage {
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
  const item = data.allSanityServicesPage.nodes[data.allSanityServicesPage.nodes.length - 1]
  if(data && data.allSanityServicesPage && item) {
    item.boxes[0].dividedImage = item.firstImage.asset.fluid
    item.boxes[1].dividedImage = item.secondImage.asset.fluid
    return (<Layout>
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
        <ServiceList
          data={item.boxes.map((box, i) => ({
            name: box.title[loc],
            title: box.title[loc],
            description: box.description[`${loc}Text`].map(par => par.children[0].text).join('\n'),
            textAlign: i&1 ? 'right' : 'left',
            url: {
              navigationLink: '',
              linkText: box.buttonText[loc]
            },
            image: box.image.asset.fluid,
            dividedImage: box.dividedImage
          }))}
        />
      </Container>
    </Layout>)
  }
  return ''
};