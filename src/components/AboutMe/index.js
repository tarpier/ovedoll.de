// @flow
import React from 'react';
import styled from 'styled-components';

import GridContainer from '../GridContainer';
import { breakpoints } from '../utils';

type Props = {
  data: {
    html: string,
  },
};

const AboutContainer = styled.div`
  @media screen and (${breakpoints.medium}) {
    width: 75%;
    margin: 0 auto;
  }
`;

const AboutMe = (props: Props) => (
  <GridContainer>
    <AboutContainer dangerouslySetInnerHTML={{ __html: props.data.html }} />
  </GridContainer>
);

export default AboutMe;
