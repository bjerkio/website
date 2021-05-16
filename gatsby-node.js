const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query Slugs {
      projects: allMdx(
        filter: { fileAbsolutePath: { glob: "**/content/projects/**/*" } }
      ) {
        nodes {
          frontmatter {
            language
            slug
          }
          fileAbsolutePath
        }
      }
      articles: allMdx(filter: { fileAbsolutePath: { glob: "**/blog/**/*" } }) {
        nodes {
          slug
          frontmatter {
            date
            language
          }
          fileAbsolutePath
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const projects = result.data.projects.nodes;

  projects
    .filter(({ frontmatter }) => frontmatter.slug && frontmatter.language)
    .forEach(({ frontmatter, fileAbsolutePath }) => {
      createPage({
        path: `projects/${frontmatter.language}/${frontmatter.slug}`,
        component: path.resolve('./src/templates/project.tsx'),
        context: {
          slug: frontmatter.slug,
          lang: frontmatter.language,
          fileAbsolutePath,
        },
      });
    });

  const articles = result.data.articles.nodes;

  articles
    .filter(({ frontmatter }) => frontmatter.date && frontmatter.language)
    .forEach(({ slug, frontmatter, fileAbsolutePath }) => {
      createPage({
        path: `blog/${slug.replace(/\/$/, '')}`,
        component: path.resolve('./src/templates/article.tsx'),
        context: {
          slug,
          lang: frontmatter.language,
          date: frontmatter.date,
          fileAbsolutePath,
        },
      });
      createPage({
        path: `blog/${slug.replace(/\/$/, '')}/amp/`,
        component: path.resolve('./src/templates/article.amp.tsx'),
        context: {
          slug,
          lang: frontmatter.language,
          date: frontmatter.date,
          fileAbsolutePath,
        },
      });
    });
};
