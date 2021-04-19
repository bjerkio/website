require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const imageMaxWidth = 1540;

module.exports = {
  siteMetadata: {
    title: 'Bjerk',
    siteUrl: 'https://bjerk.io',
    titleTemplate: '%s - Bjerk',
    description: 'Bjerk is a development agency from Oslo, Norway.',
    image: 'images/default-seo.jpg',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-typescript',
    'gatsby-background-image',
    {
      resolve: 'gatsby-transformer-yaml',
      options: {
        typeName: ({ object }) => object.type,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: imageMaxWidth,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Bjerk',
        short_name: 'Bjerk',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#0fcfa2',
        display: 'standalone',
        icon: 'src/assets/favicon.svg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: imageMaxWidth,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve('./src/components/layouts/centered.tsx'),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
