const clientConfig = require('./client-config');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
})

const isProd = process.env.NODE_ENV === 'production'
const token =
  process.env.SANITY_READ_TOKEN || process.env.SANITY_DEPLOY_STUDIO_TOKEN

module.exports = {
  siteMetadata: {
    title: `Bjerk.io`,
  },
  plugins: [
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: `bjerk`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
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
  ],
}
