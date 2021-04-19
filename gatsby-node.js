const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query ProjectSlugs {
      allMdx {
        nodes {
          frontmatter {
            language
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const projects = result.data.allMdx.nodes;

  projects
    .filter(({ frontmatter }) => frontmatter.slug && frontmatter.language)
    .forEach(({ frontmatter }) => {
      createPage({
        path: `projects/${frontmatter.language}/${frontmatter.slug}`,
        component: path.resolve('./src/templates/project.tsx'),
        context: {
          slug: frontmatter.slug,
          lang: frontmatter.language,
        },
      });
    });
};
