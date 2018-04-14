// @flow
import React from 'react';
// import Link from 'gatsby-link';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';
import { styles } from '../components/utils';

const IndexPage = ({ data }) => {
  const aboutContent = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.section === 'about');

  return (
    <div>
      <div style={{ height: '4px', backgroundColor: styles.colors.primary }} />
      <Hero
        // backgroundImage={data.headerImage}
        typeStrings={['Webseiten', 'Mobile Apps', 'Webapps', 'heißen Scheiß']}
      />
      <AboutMe data={aboutContent[0].node} profileImage={data.profileImage} />
      <ContactForm />
      <div style={{ height: '20px', backgroundColor: styles.colors.primary }} />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexData {
    profileImage: imageSharp(id: { regex: "/ovedoll.jpg/" }) {
      sizes(maxWidth: 256) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            section
            title
            date(formatString: "DD.MM.YYYY")
          }
          html
        }
      }
    }
  }
`;
