// @flow
import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Grid, Cell } from 'styled-css-grid';
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

  .gatsby-image-wrapper {
    margin: 0 auto;
  }
`;

const Wrapper = styled(GridContainer)`
  background-color: #28282d;
  color: rgba(255, 255, 255, 0.8);
  padding: 1.5rem 0;

  .gatsby-image-wrapper {
    margin: 0 auto;
  }
`;

/* display: flex;
  justify-content: center;
  align-items: center; */

const AboutMe = (props: Props) => (
  <Wrapper>
    <Grid
      columns={2}
      rows="repeat(auto-fill, minmax(250px, 1fr))"
      gap="8px"
      justifyContent="space-between"
    >
      <Cell dangerouslySetInnerHTML={{ __html: props.data.html }} />
      <Cell middle center>
        <Image alt="profile picture" sizes={props.profileImage.sizes} />
      </Cell>
    </Grid>
  </Wrapper>
);

export default AboutMe;
