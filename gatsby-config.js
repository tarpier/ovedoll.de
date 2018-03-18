module.exports = {
  siteMetadata: {
    title: 'Freelance Webdeveloper Ove Doll',
    desc: 'Go hire me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
};
