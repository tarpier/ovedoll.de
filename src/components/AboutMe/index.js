// @flow
import React from 'react';
// import styled from 'styled-components';

import GridContainer from '../GridContainer';

const AboutMe = ({ data }) => (
  <GridContainer>
    <div dangerouslySetInnerHTML={{ __html: data.html }} />
  </GridContainer>
);

export default AboutMe;
