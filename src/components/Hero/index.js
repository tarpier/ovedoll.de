// @flow
import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import Img from 'gatsby-image';

import { breakpoints } from '../utils';
import GridContainer from '../GridContainer';

import Button from '../Button';

const HeroContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 100vh;
`;

const AnimatedClaim = styled.span`
  display: block;
`;
const ClaimContainer = styled.p`
  font-size: 2.2em;
  text-align: center;
  color: white;
  font-family: rubik;
  font-weight: 400;
  line-height: 1.2;

  @media screen and (${breakpoints.medium}) {
    font-size: 2.5em;
    text-align: left;
  }
  @media screen and (${breakpoints.large}) {
    font-size: 2.8rem;
    text-align: left;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-size: 1em;

  @media screen and (${breakpoints.medium}) {
    font-size: 1.2em;
  }
`;

type Props = {
  typeStrings: Array<string>,
  heroImage: Object,
};

const Hero = ({ typeStrings, heroImage }: Props) => (
  <HeroContainer>
    <GridContainer>
      <Grid>
        <Row style={{ paddingTop: '30vh', marginBottom: '2rem' }}>
          <Col xs={12} md={8} mdOffset={2} style={{ zIndex: 1 }}>
            <ClaimContainer>
              Hi, my name is Ove and I build
              <AnimatedClaim>
                <Typed
                  strings={typeStrings}
                  typeSpeed={60}
                  startDelay={30}
                  loop
                  loopCount={Infinity}
                  backDelay={450}
                  backSpeed={60}
                />
              </AnimatedClaim>
            </ClaimContainer>
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12} style={{ zIndex: 1 }} center="xs">
            <StyledButton
              href="#"
              title="let's build something together"
              onClick={() => {
                console.log('clicked');
              }}
            />
          </Col>
        </Row>
      </Grid>
    </GridContainer>
    <Img
      alt=""
      sizes={heroImage.sizes}
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
    />
  </HeroContainer>
);
export default Hero;
