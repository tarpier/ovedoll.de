// @flow
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import GridContainer from '../GridContainer';

import { breakpoints } from '../utils';

type Props = {
  data: {
    html: string,
  },
};

const Image = styled(Img)`
  width: 16rem;
  border-radius: 100%;
  margin: 0 auto;
`;
const StyledGridContainer = styled(GridContainer)`
  padding: 3.5rem 0;
`;

const AboutMe = (props: Props) => (
  <StyledGridContainer>
    <Grid>
      <Row>
        <Col xs={12} sm={6} lg={3}>
          <Image alt="profile picture" sizes={props.profileImage.sizes} />
        </Col>
        <Col xs={12} sm={6} lg={9}>
          <div dangerouslySetInnerHTML={{ __html: props.data.html }} />
        </Col>
      </Row>
    </Grid>
  </StyledGridContainer>
);

export default AboutMe;
