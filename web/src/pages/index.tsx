import * as React from 'react'
import { graphql } from 'gatsby'
import IntroVideo from '../components/Homepage/IntroVideo'
import Layout from '../layouts'
import CTABox from '../components/Homepage/CTABox'
import Container from '../components/Container'
import BlockContent from '../components/BlockContent'
import { Box, Button, Grid, Heading } from '@theme-ui/components'
import Link from '../components/Link'
import { Fragment } from 'react'

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
    <IntroVideo
      data={{
        videoUrl: data.sanityHomepage.introContent.backgroundVideo.navigationLink,
        videoTitle: data.sanityHomepage.introContent.backgroundVideo.linkText,
      }}
    >
      {data.sanityHomepage && data.sanityHomepage.introContent._rawTitle && (
        <Fragment>
          <BlockContent 
            blocks={data.sanityHomepage.introContent._rawTitle} 
          />
          <Button sx={{color: 'black', fontSize: 2, fontWeight: 'normal'}}>
            <Link
            to={data.sanityHomepage.introContent.navigationButtonLink.navigationLink}>
              {data.sanityHomepage.introContent.navigationButtonLink.linkText}
            </Link>
          </Button>
          
        </Fragment>
      )}
    </IntroVideo>
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
          gap: 3,
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
