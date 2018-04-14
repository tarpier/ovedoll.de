// @flow
import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import { Grid, Cell } from 'styled-css-grid';

import { breakpoints } from '../utils';
import background from './heroBackground.jpg';
import Button from '../Button';

const HeroWrapper = styled.div``;

const ImageContainer = styled.div`
  background: url(${background}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
  position: relative;
  /* text-align: center; */
  width: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClaimContainer = styled.p`
  font-size: 3.3rem;
  color: white;
  font-family: rubik;
  font-weight: 400;
  line-height: 1.2;
  text-align: left;

  @media screen and (${breakpoints.medium}) {
    font-size: 2.5em;
    text-align: left;
  }

  @media screen and (${breakpoints.small}) {
    font-size: 2.2em;
    text-align: center;
  }
`;

const AnimatedClaim = styled.span`
  display: block;
`;

const StyledButton = styled(Button)``;

type Props = {
  typeStrings: Array<string>,
};

export default function ({ typeStrings }: Props) {
  // TODO Use Gatsby Image to include backgroundImage
  // console.log(backgroundImage);

  return (
    <HeroWrapper>
      <ImageContainer>
        <Grid columns={1}>
          <Cell left={1} top={1}>
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
          </Cell>
          <Cell left={1} top={2} middle center>
            <StyledButton
              href="#"
              title="let's build something together"
              onClick={() => {
                console.log('clicked');
              }}
            />
          </Cell>
        </Grid>
      </ImageContainer>
    </HeroWrapper>
  );
}
