import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import HomeBanner from '../components/HomeBanner/home-banner';
import { StaticQuery } from 'gatsby';
import ButtonLink from '../components/Button/button'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery
      query={graphql`
        query Home {
          prismicHome {
            id
            data {
              linktext
              link {
                link_type
                url
                target
              }
              introductory {
                html
              }
              title {
                text
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <HomeBanner />
          <h1>{data.prismicHome.data.title.text}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.prismicHome.data.introductory.html,
            }}
          />
          <ButtonLink textCenter>
            <a
              href={data.prismicHome.data.link.url}
            >
              {data.prismicHome.data.linktext}
            </a>
          </ButtonLink>
        </div>
      )}
    />
  </Layout>
)

export default IndexPage
