import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

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

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ove Doll - Freelance Webdeveloper"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

TemplateWrapper.defaultProps = {
  children: () => {},
};

export default TemplateWrapper;
