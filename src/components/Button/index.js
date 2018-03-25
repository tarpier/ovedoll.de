// @flow
import React from 'react';
import styled from 'styled-components';

import { styles } from '../utils';

const Link = styled.a`
  text-decoration: none;
  color: ${styles.colors.white};
  border: 3px solid ${styles.colors.primary};
  padding: 1rem;
  border-radius: 36px;
  
  &:hover{
    color: #5E5E5E;
    background-color ${styles.colors.primary};
    -webkit-transition: background-color 350ms ease-in;
    -ms-transition: background-color 350ms ease-in;
    transition: background-color 350ms ease-in;
  }
`;

type Props = {
  href: string,
  title: string,
  className: string,
  onCLick: () => null,
};

export default function Button({
  className, href, title, onCLick,
}: Props) {
  return (
    <Link className={className} href={href} onCLick={onCLick}>
      {title}
    </Link>
  );
}
