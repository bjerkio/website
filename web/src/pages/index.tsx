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
      ctaBoxes: {
        linkTo: string
        title: string
        linkText: string
        content: string
      }[]
      _rawHeroContent: any
    }
    allMediumPost: {
      edges: [
        {
          node: MediumArticleNode
        }
      ]
    }
  }
}

export default ({ data }: IndexPageProps) => (
  <Layout>
    <Hero>
      {data.sanityHomepage && data.sanityHomepage._rawHeroContent && (
        <BlockContent blocks={data.sanityHomepage._rawHeroContent} />
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
      {data.sanityHomepage && data.sanityHomepage.ctaBoxes &&
        data.sanityHomepage.ctaBoxes.map(ctabox => (
          <CTABox
            title={ctabox.title}
            linkTo={ctabox.linkTo}
            linkText={ctabox.linkText}
          >
            {ctabox.content}
          </CTABox>
        ))}
    </Container>
    <Container
      pt={6}
      sx={{
        display: 'grid',
        gridGap: 5, // theme.space[3]
        gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
      }}
    >
      {data.allMediumPost &&
        data.allMediumPost.edges.map(({ node }) => (
          <MediumArticle key={node.id} {...node} />
        ))}
    </Container>
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    sanityHomepage(_id: { eq: "homepage" }) {
      ctaBoxes {
        linkTo
        title
        linkText
        content
      }
      _rawHeroContent
    }
    allMediumPost(limit: 2) {
      edges {
        node {
          id
          latestPublishedAt
          uniqueSlug
          title
          content {
            subtitle
          }
          virtuals {
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`
