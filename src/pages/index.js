import React from 'react';
// import Link from 'gatsby-link';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';

const IndexPage = ({ data }) => {
  const aboutContent = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.section === 'about');
  const skills = data.allMarkdownRemark.edges.filter(({ node }) => node.frontmatter.section === 'skills');

  return (
    <div>
      <Hero
        // backgroundImage={data.headerImage}
        typeStrings={['Webseiten', 'Mobile Apps', 'Webapps', 'heißen Scheiß']}
      />

      <AboutMe data={aboutContent[0].node} />
      <ContactForm />
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexData {
    headerImage: imageSharp(id: { regex: "/header/" }) {
      sizes(maxWidth: 1240) {
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
