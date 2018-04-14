// @flow
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import GridContainer from '../GridContainer';
import { breakpoints } from '../utils';

type Props = {
  data: {
    html: string,
  },
};

const AboutContainer = styled.div`
  font-size: 1.1rem;
  display: flex;
  flex-direction: row;

  @media screen and (${breakpoints.medium}) {
    width: 75%;
    margin: 0 auto;
  }

  h2 {
    font-size: 2rem;
  }

  .gatsby-image-outer-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Image = styled(Img)`
  width: 16rem;
  border-radius: 100%;
`;
const Content = styled.div`
  flex: 2;
  padding-right: 2.5rem;
`;

/* display: flex;
  justify-content: center;
  align-items: center; */

const AboutMe = (props: Props) => (
  <GridContainer>
    <AboutContainer>
      <Content dangerouslySetInnerHTML={{ __html: props.data.html }} />
      <Image alt="profile picture" sizes={props.profileImage.sizes} />
    </AboutContainer>
  </GridContainer>
);

export default AboutMe;
