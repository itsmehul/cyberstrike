module.exports = {
  siteMetadata: {
    title: 'Cyberstrike',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 500
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-remark'
  ],
  pathPrefix: `/`,
  
}
