import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import PropTypes from 'prop-types';

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
`;

const AnimatedClaim = styled.span`
  display: block;
`;

const StyledButton = styled(Button)`
  margin-top: 10rem;
`;

const Hero = props => (
  <HeroWrapper>
    <ImageContainer>
      <ClaimContainer>
        Hi, ich bin Ove. Ich baue
        <AnimatedClaim>
          <Typed
            strings={props.typeStrings}
            typeSpeed={60}
            startDelay={30}
            loop
            loopCount={Infinity}
            backDelay={450}
            backSpeed={60}
          />
        </AnimatedClaim>
      </ClaimContainer>
      <StyledButton
        href="#"
        title="Lass uns zusammen arbeiten"
        onClick={() => {
          console.log('clicked');
        }}
      />
    </ImageContainer>
  </HeroWrapper>
);

Hero.propTypes = {
  typeStrings: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Hero;
