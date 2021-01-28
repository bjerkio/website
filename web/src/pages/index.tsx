import * as React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Homepage/Hero'
import Layout from '../layouts'
import MediumArticle, {
  MediumArticleNode,
} from '../components/Homepage/MediumArticle'
import CTABox from '../components/Homepage/CTABox'
import Container from '../components/Container'
import BlockContent from '../components/BlockContent'
import { Box, Grid, Heading } from '@theme-ui/components'

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    sanityHomepage: {
      introContent: {
        _rawTitle: any;
        navigationButtonLink: {
          navigationLink: string;
          linkText: string;
        }
        backgroundVideo: {
          navigationLink: string;
          linkText: string;
        }
      }
      helpBox: {
        _rawTitle: any;
        _rawDescription: any;
        ctaBoxes: [{
          image: any;
          hoverImage: any;
          title: string;
          content: string;
          linkTo: string;
          linkText: string;
        }]
      }
    }
  }
}

export default ({ data }: IndexPageProps) => {
return (
  <Layout>
    <Hero>
      {data.sanityHomepage && data.sanityHomepage.introContent._rawTitle && (
        <BlockContent blocks={data.sanityHomepage.introContent._rawTitle} />
      )}
    </Hero>
    <Container sx={{pt: 6}}>
      <Heading as='h1' sx={{ mb: 3, fontWeight: 'normal' }}>
        <BlockContent blocks={data.sanityHomepage.helpBox._rawTitle} />
      </Heading>
      <Box sx={{width: '60%'}}>
        <BlockContent blocks={data.sanityHomepage.helpBox._rawDescription} />
      </Box>
      <Grid
        pt={5}
        sx={{
          gap: 3, // theme.space[3]
          gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
        }}
      >
        {data.sanityHomepage && data.sanityHomepage.helpBox.ctaBoxes &&
          data.sanityHomepage.helpBox.ctaBoxes.map(ctabox => (
            <CTABox data={ctabox}>
              {ctabox.content}
            </CTABox>
          ))}
    </Grid>
    </Container>
  </Layout>
)}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    sanityHomepage(_id: { eq: "homepage" }) {
      introContent {
        _rawTitle
        navigationButtonLink {
          navigationLink
          linkText
        }
        backgroundVideo {
          navigationLink
          linkText
        }
      }
      helpBox {
        _rawTitle
        _rawDescription
        ctaBoxes {
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          hoverImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          title
          content
          linkTo
          linkText
        }
      }
    }
  }
`
