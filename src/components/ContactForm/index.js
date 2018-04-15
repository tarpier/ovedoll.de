// @flow
import React from 'react';
import styled from 'styled-components';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

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
  font-family: inherit;

  &::placeholder {
    color: ${styles.colors.inactive};
    font-family: inherit;
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

const Honeypot = styled.label`
  display: none;
  visibility: hidden;
`;

const ContactForm = () => (
  <Container>
    <Grid>
      <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <Honeypot>
          Don’t fill this out if you're human: <input name="bot-field" />
        </Honeypot>
        <Row>
          <Col xs={12}>
            <Input type="text" name="name" placeholder="Ihr Name" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Input type="text" name="email" placeholder="meine@emailAdresse.de" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Textarea name="message" rows="4" type="plaintext" placeholder="Ihre Nachricht" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Button type="submit" value="Absenden" />
          </Col>
        </Row>
      </Form>
    </Grid>
  </Container>
);

export default ContactForm;
