// const { GOOGLE_API_KEY, GOOGLE_CAL_ID } = process.env
module.exports = {
  siteMetadata: {
    title: `Yoga with Susan Turis`,
    description: `Personal website and blog for a certified Iyengar Yoga Teacher in Brooklyn, NYC`,
    author: `Leslie Turis`,
  },

  plugins: [
  
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `susanturis`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `http://ghost.leslie.casa`,
        contentApiKey: `adba6e8e1572b9aedda52efd4d`,
        version: `v3`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/lotus.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
