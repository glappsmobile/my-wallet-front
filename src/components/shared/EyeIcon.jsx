import React from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import absolute from '../../styles/utils/absolute';

const EyeIcon = ({ isVisible, setIsVisible }) => (
  <IconContainer onClick={() => setIsVisible((state) => !state)}>
    {isVisible ? (
      <AiFillEyeInvisible title="Esconder senha" />
    ) : (
      <AiFillEye title="Mostrar senha" />
    )}
  </IconContainer>
);

EyeIcon.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  setIsVisible: PropTypes.func.isRequired,
};

const IconContainer = styled.div`
    ${absolute('5px', '10px', '0', null)}
    margin: auto;
    color: #a328d6;
    font-size: 30px;
    height: fit-content;
    cursor: pointer;
`;

export default EyeIcon;
