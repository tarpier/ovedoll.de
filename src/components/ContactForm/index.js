// @flow
import React from 'react';
import styled from 'styled-components';

import { styles, breakpoints } from '../utils';
import GridContainer from '../GridContainer';

const Input = styled.input`
  width: 100%;
  padding: 25px 0;
  margin-bottom: 25px;
  background: transparent;
  font-size: 1rem;
  border: none;
  color: ${styles.colors.fontColor};
  border-bottom: 1px solid ${styles.colors.inactive};
  transition: border-color 0.3s;

  &::placeholder {
    color: ${styles.colors.inactive};
  }

  &:focus {
    border-bottom: 1px solid ${styles.colors.primary};
    outline: none;
  }
`;

const Textarea = styled.textarea`
  resize: vertical;
  overflow: auto;
  width: 100%;
  padding: 25px 0;
  margin-bottom: 25px;
  background: transparent;
  font-size: 1rem;
  border: none;
  color: ${styles.colors.fontColor};
  border-bottom: 1px solid ${styles.colors.inactive};
  transition: border-color 0.3s;

  &::placeholder {
    color: ${styles.colors.inactive};
  }

  &:focus {
    border-bottom: 1px solid ${styles.colors.primary};
    outline: none;
  }
`;

const Button = styled.input`
  font-weight: 700;
  background-color: transparent;
  border: none;
  color: ${styles.colors.fontColor};
  font-size: 1rem;
  display: block;
  padding: 15px 25px;
  margin: 15px auto;
  transition: color 0.25s;

  &:hover {
    color: ${styles.colors.primary};
  }
`;

const CenterContainer = styled.div`
  width: 100%;

  @media screen and (${breakpoints.medium}) {
    width: 75%;
    margin: 0 auto;
  }
`;

const ContactForm = () => (
  <GridContainer>
    <CenterContainer>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <Input type="text" name="name" placeholder="Ihr Name" />
        <Input type="text" name="email" placeholder="meine@emailAdresse.de" />
        <Textarea name="message" rows="4" type="plaintext" placeholder="Ihre Nachricht" />

        <Button type="submit" value="Absenden" />
      </form>
    </CenterContainer>
  </GridContainer>
);

export default ContactForm;
