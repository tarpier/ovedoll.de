// @flow
import React from 'react';
// import Link from 'gatsby-link';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import ContactForm from '../components/ContactForm';
import { styles } from '../components/utils';

const IndexPage = props => (
  <div>
    <div style={{ height: '4px', backgroundColor: styles.colors.primary }} />
    <Hero
      heroImage={props.data.heroImage}
      typeStrings={['websites', 'mobile apps', 'webapps', 'hot sh*t']}
    />
    <AboutMe aboutContent={props.data.aboutContent.html} profileImage={props.data.profileImage} />
    <ContactForm />
    <div style={{ height: '20px', backgroundColor: styles.colors.primary }} />
  </div>
);

export default IndexPage;

export const pageQuery = graphql`
  query IndexData {
    profileImage: imageSharp(id: { regex: "/ovedoll.jpg/" }) {
      sizes(maxWidth: 256) {
        ...GatsbyImageSharpSizes
      }
    }
    heroImage: imageSharp(id: { regex: "/heroBackground.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    aboutContent: markdownRemark(frontmatter: { section: { eq: "about" } }) {
      html
    }
  }
`;
