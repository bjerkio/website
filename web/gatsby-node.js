const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const projects = result.data.allMdx.edges;

  projects
    .filter(({ node }) => node.frontmatter.slug)
    .forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve('./src/templates/project.js'),
        context: { id: node.id },
      });
    });
};
