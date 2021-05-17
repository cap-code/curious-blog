module.exports = {
  siteMetadata: {
    title: `curious founder community`,
    description: `India's most badass community of founders and makers`,
    author: `@curiousTeam`,
    copyright:`curiousTeam`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: 'https://curiousfounders.us1.list-manage.com/subscribe/post?u=80e59984a92e4102f27882fb4&amp;id=b4b30bcb5e', // string; add your MC list endpoint here; see instructions below
          timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `interviews`,
        path: `${__dirname}/src/interviews`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `curious founders`,
        short_name: `curious`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
