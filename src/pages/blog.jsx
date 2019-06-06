import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

const Wrapper = styled(Link)`
text-decoration: none;
color: #000;

`

const Blog = ({data: {prismicBlog, allPrismicPost } }) => {
  const { data } = prismicBlog
  const postDetail = allPrismicPost.edges.slice(0,1).pop()
    return (
        <Layout>
        {data.heading.text}
        <div dangerouslySetInnerHTML={{__html: data.description.html }} />
        <div>
        {data.body.map(result => {
            return(
              result.items.map(item => <Wrapper to={`/blog/${item.blog_post.uid}`}>
              <h2>
                {postDetail.node.data.title.text}
              </h2>
              <div>{postDetail.node.data.description.text}</div>
            </Wrapper>))
        })}
        </div>
        </Layout>
    )
}

export default Blog;

export const pageQuery = graphql`
query Blog {
  prismicBlog{
  data{
    heading{
      text
    }
    description{
      html
    }
    body{
      items{
        blog_post{
          uid
          slug
          url
        }
      }
    }
  }
}
  allPrismicPost{
    edges{
      node{
        data{
          description{
            text
          }
          title{
            text
          }
        }
      }
    }
  }
}
`

/* 

*/