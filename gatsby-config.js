/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
   plugins: [
     {
       resolve: `gatsby-plugin-manifest`,
       options: {
         name: `Spaceballcookie`,
         short_name: `Spaceballcookie`,
         start_url: `/`,
         background_color: `#000`,
         theme_color: `#fff`,
         display: `standalone`,
         icon: `src/images/spc.png`
       },
     },
     `gatsby-plugin-sass`,
   ],
 }
