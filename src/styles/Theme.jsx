import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: '#8C11BE',
    text: '#fff',
    white: '#fff',
    danger: 'rgb(200, 100, 89)',
    inherit: 'inherit',
  },
  font: {
    size: {
      extraSmall: '14px',
      small: '16px',
      medium: '18px',
      large: '20px',
      extraLarge: '24px',
    },
    family: 'Raleway, sans-serif',
  },
  spacing: {
    small: '5px',
    medium: '10px',
    large: '20px',
    huge: '40px',
    auto: 'auto',
    none: '0px',
  },
};

// eslint-disable-next-line arrow-body-style
const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]),
};

Theme.defaultProps = {
  children: '',
};

export default Theme;
