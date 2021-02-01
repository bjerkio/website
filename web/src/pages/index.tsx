/** @jsx */
import { graphql } from 'gatsby';
import React from 'react';
import { BlockContent } from '../components/block-content/block-content';
import { Container } from '../components/container';
import { CallToActionBox } from '../components/home-page/call-to-action-box';
import { Hero } from '../components/home-page/hero';
import { MediumArticle } from '../components/home-page/medium-article';
import { Layout } from '../components/layouts';
import { IndexQueryQuery } from '../generated/graphql-types';

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
`;

interface IndexPageProps {
  data: IndexQueryQuery;
}

export default ({ data }: IndexPageProps) => (
  <Layout>
    <Hero>
      {data?.sanityHomepage?._rawHeroContent && (
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
      {data?.sanityHomepage?.ctaBoxes.map((ctaBoxes) => (
        <CallToActionBox
          title={ctaBoxes.title}
          linkTo={ctaBoxes.linkTo}
          linkText={ctaBoxes.linkText}
        >
          {ctaBoxes.content}
        </CallToActionBox>
      ))}
    </Container>
    <Container
      sx={{
        pt: 6,
        display: 'grid',
        gridGap: 5, // theme.space[3]
        gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
      }}
    >
      {data?.allMediumPost?.edges.map(({ node }) => (
        <MediumArticle key={node.id} {...node} />
      ))}
    </Container>
  </Layout>
);
