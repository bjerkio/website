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
  debugger
return (
  <Layout>
    <Hero>
      {data.sanityHomepage && data.sanityHomepage.introContent._rawTitle && (
        <BlockContent blocks={data.sanityHomepage.introContent._rawTitle} />
      )}
    </Hero>
    <Container
      pt={6}
      sx={{
        display: 'grid',
        gridGap: 3, // theme.space[3]
        gridTemplateColumns: ['1fr', '1fr', '1fr', '1fr 1fr 1fr'],
      }}
    >
      {data.sanityHomepage && data.sanityHomepage.helpBox.ctaBoxes &&
        data.sanityHomepage.helpBox.ctaBoxes.map(ctabox => (
          <CTABox
            title={ctabox.title}
            linkTo={ctabox.linkTo}
            linkText={ctabox.linkText}
          >
            {ctabox.content}
          </CTABox>
        ))}
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
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
          hoverImage {
            asset {
              fluid(maxWidth: 700) {
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
