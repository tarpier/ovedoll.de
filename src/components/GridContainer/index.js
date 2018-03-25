import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InnerContainer = styled.div`
  /* Small only */
  @media screen and (max-width: 39.9375em) {
    width: 100%;
    padding: 0 10px;
    // background-color: red;
  }

  /* Medium and up */
  @media screen and (min-width: 40em) {
    width: 40em;
    padding: 0 10px;
    // background-color: blue;
  }

  /* Medium only */
  @media screen and (min-width: 40em) and (max-width: 63.9375em) {
  }

  /* Large and up */
  @media screen and (min-width: 64em) {
    width: 64em;
    padding: 0 10px;
    // background-color: green;
  }

  /* Large only */
  @media screen and (min-width: 64em) and (max-width: 74.9375em) {
  }
`;

const OuterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = props => (
  <OuterContainer className={props.className}>
    <InnerContainer>{props.children}</InnerContainer>
  </OuterContainer>
);

GridContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

GridContainer.defaultProps = {
  className: '',
};

export default GridContainer;
