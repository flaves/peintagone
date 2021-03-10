require('dotenv').config({
  path: `.env`,
});

const config = {
  siteUrl: `https://wwww.peintagonecenter-namur.be`,
};

module.exports = {
  siteMetadata: {
    title: `Peintagone Center Namur`,
    description: `Magasin de peinture`,
    author: `@flaves`,
    siteUrl: config.siteUrl,
  },
  plugins: [
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-extract-schema',
    'gatsby-plugin-react-axe',
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        documentPaths: [`./src/**/*.{ts,tsx}`],
      },
    },
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        // Put your prismic schemas here !
        schemas: {
          company_infos: require('./src/schemas/company_infos.json'),
          navigation: require('./src/schemas/layout/navigation.json'),
          footer: require('./src/schemas/layout/footer.json'),
          home_page: require('./src/schemas/home_page.json'),
          contact_page: require('./src/schemas/contact_page.json'),
          painting_category: require('./src/schemas/painting_category.json'),
          product_category: require('./src/schemas/product_category.json'),
          product_type: require('./src/schemas/product_type.json'),
        },
        linkResolver: require('./src/utils/linkResolver.ts'),
      },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `TO_REPLACE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `peintagonecenter-namur`,
        short_name: `flaves`,
        start_url: `/`,
        background_color: `#0F111A`,
        theme_color: `#0F111A`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options: {
        features: [`default`, `es2015`, `es2016`, `es2017`, `es2018`],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: config.siteUrl,
        sitemap: `${config.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
