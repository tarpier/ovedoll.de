module.exports = {
  siteMetadata: {
    title: 'Freelance Webdeveloper Ove Doll',
    desc: 'Go hire me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-remark',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['rubik:400,700'],
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        dir: '/src/svg',
        icon: true,
        viewBox: false,
      },
    },
  ],
};
