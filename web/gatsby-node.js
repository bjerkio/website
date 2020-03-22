const { isFuture } = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

async function createPages(graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            id
            slug {
              current
            }
            title
            _rawContent
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const edges = (result.data.allSanityPage || {}).edges || []

  edges
    .forEach(edge => {
      const slug = edge.node.slug.current
      const path = `/${slug}/`

      reporter.info(`Creating page: ${path}`)

      createPage({
        path,
        component: require.resolve('./src/components/Page.tsx'),
        context: edge.node,
      })
    })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createPages(graphql, actions, reporter)
}
