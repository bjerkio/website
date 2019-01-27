require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Bjerk AS – Business Studio, Oslo`,
    description: `Bjerk er blitt et konsulent-hus med hovedfokus på tre fagområder; applikasjonsutvikling, markedsføring og forretningsstrategi.`,
    author: `@bjerkio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#EEEEEE`,
        theme_color: `#4ECCA3`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-prismic`,
    //   options: {
    //     repositoryName: `bjerk`,
    //     accessToken: `${process.env.API_KEY}`,
    //     linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
