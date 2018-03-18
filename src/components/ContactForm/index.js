import React from 'react';
import styled from 'styled-components';

import GridContainer from '../GridContainer';

const ContactForm = () => (
  <GridContainer>
    <div>
      <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="text" name="name" placeholder="Ihr Name" />
        <input type="text" name="email" placeholder="meine@emailAdresse.de" />

        <button>Send</button>
      </form>
    </div>
  </GridContainer>
);

export default ContactForm;
