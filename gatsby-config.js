module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "nine25",
    description: "The smartest way to spend, manage & invest your salary.",
    author: "nine25",
    keywords:
      "nine25, nine25.com, nine25.com.au, nine25.com.au/blog, streaming, investment, innovation, finance, investor, EFT, crypto, salary, pay, payment, wages, stream salary",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // This directory can ONLY hold *.svg files
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `nine25.app`,
        short_name: `nine25`,
        start_url: `/`,
        background_color: `#FF6363`,
        theme_color: `#FF6363`,
        display: `minimal-ui`,
        icon: "src/assets/round_logo.svg",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 90,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
