import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const SuccessMessage = () => (
  <>
    <Message>
      Registrado com sucesso!
    </Message>
    <Link to="/sign-in">
      <Button>
        Ir para a área de login
      </Button>
    </Link>
  </>
);

const Message = styled.span`
    color: #FFFFFF;
    font-family: "Raleway", sans-serif;
    text-align: center;
    margin-bottom: 20px;
    font-size: 24px;
`;

export default SuccessMessage;
