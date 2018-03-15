module.exports = {
  siteMetadata: {
    title: 'Freelance Webdeveloper Ove Doll',
    desc: 'Go hire me',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
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
        // see https://github.com/smooth-code/svgr for a list of all options
      },
    },
  ],
};
