import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import flexify from '../../styles/utils/flexify';

const Button = ({
  isLoading, children, ...otherProps
}) => (
  <StyledButton
    {...otherProps}
    isLoading={isLoading}
    disabled={isLoading}
  >
    {isLoading ? (
      <Loader
        type="Bars"
        color="#fff"
        height={40}
        width={100}
      />
    ) : (
      children
    )}
  </StyledButton>
);

Button.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any),
    PropTypes.string,
  ]),
};

Button.defaultProps = {
  isLoading: false,
  children: '',
};

const StyledButton = styled.button`
    ${flexify()}
    height: 46px;
    width: 100%;
    border-radius: 5px;
    border: none;
    background-color: #ae28d6;
    color: white;
    font-weight: bold;
    font-size: 20px;
    font-family: "Raleway", sans-serif;
    cursor: ${({ isLoading }) => (isLoading ? 'not-allowed' : 'pointer')};
    opacity: ${({ isLoading }) => (isLoading ? '0.5' : '1')};

    & {
      :hover {
        filter: brightness(1.1);
      }
      :disabled {
        opacity: 0.5;
      }

      * {
        cursor: inherit;
      }
    }

    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export default Button;
