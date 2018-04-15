import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal, ThemeProvider } from 'styled-components';

import { styles } from '../components/utils';
// import "./index.css";

/* eslint-disable no-unused-expressions */
injectGlobal`
  html {
    margin: 0;
    font-family: rubik;
    font-weight: 400;
    color: ${styles.colors.fontColor}
  }

  body {
    margin: 0;
  }
`;

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // rem
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75, // em
    },
  },
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ove Doll - Freelance Webdeveloper"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },
      ]}
    />
    <ThemeProvider theme={theme}>
      <div
        style={{
          margin: '0 auto',
        }}
      >
        {children()}
      </div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: () => {},
};

export default TemplateWrapper;
