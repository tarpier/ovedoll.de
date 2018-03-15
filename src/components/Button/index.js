import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Link = styled.a`
  text-decoration: none;
  color: white;
  border: 3px solid #48e5c2;
  padding: 1em;
  border-radius: 36px;
  
  &:hover{
    color: #5E5E5E;
    background-color #48e5c2;
    -webkit-transition: background-color 350ms ease-in;
    -ms-transition: background-color 350ms ease-in;
    transition: background-color 350ms ease-in;
  }
`;

const Button = (props) => {
  const {
    className, href, title, onCLick,
  } = props;
  return (
    <Link className={className} href={href} onCLick={onCLick}>
      {title}
    </Link>
  );
};

Button.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  onCLick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;
