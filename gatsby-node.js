/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")

const wrapper = promise =>
promise.then(result => {
  if (result.errors) {
    throw result.errors
  }
  return result
})



exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await wrapper(
   graphql(`
    {
      allPrismicPage {
        edges {
          node {
            id
            uid
          }
        }
      }
      allPrismicPost{
        edges{
          node{
            id
            uid
            data{
              title{
                text
              }
              content{
                text
              }
            }
          }
        }
      }
    }
  `)
  )

  const pages = result.data.allPrismicPage.edges
  const template = path.resolve("src/components/Page/page.jsx")

  const postList = result.data.allPrismicPost.edges
  const postTemplate = require.resolve('./src/templates/post.jsx')

  postList.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  

  pages.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: template,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
