import React from "react";
import Link from "gatsby-link";
import Hero from "../components/Hero";

const IndexPage = () => (
  <div>
    <Hero typeStrings={["Webseiten", "Mobile Apps", "heißen Scheiß"]} />
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;