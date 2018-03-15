import React from 'react';
// import Link from 'gatsby-link';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

const IndexPage = () => (
  <div>
    <Hero typeStrings={['Webseiten', 'Mobile Apps', 'Webapps', 'heißen Scheiß']} />
    <AboutMe />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </div>
);

export default IndexPage;

export const query = graphql`
  query Sitemeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;
