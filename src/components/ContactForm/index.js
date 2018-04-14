// @flow
import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';

import { styles, breakpoints } from '../utils';
import GridContainer from '../GridContainer';

const Input = styled.input`
  width: 100%;
  padding: 25px 0;
  margin-bottom: 25px;
  background: transparent;
  font-size: 1rem;
  border: none;
  color: ${styles.colors.fontColorLight};
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
  color: ${styles.colors.fontColorLight};
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
  color: ${styles.colors.fontColorLight};
  font-size: 1rem;
  display: block;
  padding: 15px 25px;
  margin: 15px auto;
  transition: color 0.25s;

  &:hover {
    color: ${styles.colors.primary};
  }
`;

const Form = styled.form`
  padding: 1.5rem 0;
`;

const Container = styled(GridContainer)`
  background-color: #28282d;
  color: rgba(255, 255, 255, 0.8);
`;

const ContactForm = () => (
  <Container>
    <Grid columns={1}>
      <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <Cell>
          <Input type="text" name="name" placeholder="Your name" />
        </Cell>
        <Cell>
          <Input type="text" name="email" placeholder="name@emailadress.com" />
        </Cell>
        <Cell>
          <Textarea name="message" rows="4" type="plaintext" placeholder="Your message" />
        </Cell>

        <Cell>
          <Button type="submit" value="Absenden" />
        </Cell>
      </Form>
    </Grid>
  </Container>
);

export default ContactForm;
