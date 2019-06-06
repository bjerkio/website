import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout';
import TeamMember from '../TeamMember/team-member';
import Services from '../Services/services';
import './page.css';

const Page = ({ data: { prismicPage } }) => {
  const { data } = prismicPage
  return <Layout>
      <React.Fragment>
        <h1>{data.title.text}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        {data.body ? data.body.map(slice => {
          if (slice.slice_type === 'team') {
            return <div className="team">
                {slice.items.map(sliceObject => {
                  return <TeamMember key={sliceObject.first_and_lastname} data={sliceObject} />
                })}
              </div>
          }
          if (slice.slice_type === 'services') {
            return <div className="services">
                {slice.items.map(sliceObject => {
                  return <Services key={sliceObject.first_and_lastname} data={sliceObject} />
                })}
              </div>
          }
        }) : ''}
      </React.Fragment>
    </Layout>
}

export default Page

export const pageQuery = graphql`
  query PageBySlug($uid: String!) {
    prismicPage(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        content {
          html
        }
        body {
          ...Team
          ...Service
        }
      }
    }
  }
  fragment Team on PrismicPageBodyTeam {
    slice_type
    items {
      first_and_lastname {
        text
      }
      position {
        text
      }
      portrait {
        url
      }
    }
  }
  fragment Service on PrismicPageBodyServices {
    slice_type
    items {
      link {
        uid
      }
      title1 {  
        text
      }
    }
  }
`
