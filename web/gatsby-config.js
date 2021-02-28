const clientConfig = require('./client-config');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const isProd = process.env.NODE_ENV === 'production';
const token =
  process.env.SANITY_READ_TOKEN || process.env.SANITY_DEPLOY_STUDIO_TOKEN;

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
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`no`,`en`],
        defaultLanguage: `no`,
        redirect: true,
      },
    },
  ],
};
