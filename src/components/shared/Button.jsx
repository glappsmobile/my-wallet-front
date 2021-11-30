import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { css } from 'styled-components/macro';
import flexify from '../../styles/utils/flexify';
import unselectable from '../../styles/utils/unselectable';
import noHighlight from '../../styles/utils/noHighlight';

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
  ${({ theme }) => css`
    ${flexify()}
    ${unselectable()}
    ${noHighlight()}
    height: 46px;
    width: 100%;
    padding: 20px;
    border-radius: 5px;
    border: none;
    background-color: ${theme.color.primaryLight};
    font-size: ${theme.font.size.large};
    color: white;
    font-weight: bold;
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
  `}
`;

export default Button;
