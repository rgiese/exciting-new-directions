siteMetadata = {
  title: `Exciting New Directions`,
  description: `A Grumpycorp Studios Production`,
  author: `Robin Giese`,
  authorEmail: `robin@grumpycorp.com`,
  siteUrl: `https://www.excitingnewdirections.com`,
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    // TypeScript
    `gatsby-plugin-typescript`,

    // HTML headers management
    `gatsby-plugin-react-helmet`,

    // SCSS
    `gatsby-plugin-sass`,

    // Markdown processing
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/content/portfolio`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // See https://github.com/ChristopherBiscardi/gatsby-mdx/blob/master/examples/custom-remark-plugins/gatsby-config.js for further examples
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1500,
              srcSetBreakpoints: [375, 750, 1500, 2250], // constrain some of the image processing madness (default: 188, 375, 750, 1125, 1500, 2250, 4608)
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-smartypants`,
          },
        ],
      },
    },

    // Image processing pipeline
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    // App manifest (PWA)
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${siteMetadata.title} ${siteMetadata.description}`,
        short_name: `${siteMetadata.title}`, // eslint-disable-line @typescript-eslint/camelcase
        start_url: `/`, // eslint-disable-line @typescript-eslint/camelcase
        background_color: `#000000`, // eslint-disable-line @typescript-eslint/camelcase
        theme_color: `#f26739`, // eslint-disable-line @typescript-eslint/camelcase
        icon: `${__dirname}/src/assets/icons/grumpy-robin.svg`,
        include_favicon: true, // eslint-disable-line @typescript-eslint/camelcase
      },
    },

    // Sitemap (c.f. static/robots.txt)
    `gatsby-plugin-sitemap`,
  ],
};
