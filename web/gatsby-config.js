require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const locality = 'no';

module.exports = {
  siteMetadata: {
    title: 'Bjerk.io',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './src/generated/graphql-types.ts',
      },
    },
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: 'bjerk',
      },
    },
    {
      resolve: 'gatsby-plugin-theme-ui',
      options: {
        preset: '@theme-ui/preset-base',
      },
    },
    // 'gatsby-theme-style-guide',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['TTCommons', 'TTCommons-Italic'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/${locality}/projects`,
        name: 'projects',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/${locality}/about-articles`,
        name: 'about-articles',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/${locality}/services-articles`,
        name: 'services-articles',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/${locality}/employees`,
        name: 'employees',
      },
    },
    'gatsby-plugin-mdx',
  ],
};
