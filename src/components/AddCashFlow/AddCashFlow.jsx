import styled from 'styled-components';
import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Input from '../shared/Input';
import Button from '../shared/Button';
import Form from '../shared/Form';
import { addCashFlow } from '../../services/myWallet.services';

const AddCashFlow = () => {
  const path = useLocation().pathname;
  const action = (path === '/add-inflow') ? 'entrada' : 'saída';
  const history = useHistory();
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/sign-in');
  };

  const decimalMask = (number) => {
    // const dotIndex = number.indexOf(".");
    let newNumber = number.length > 10 ? (number.substring(0, 10)) : number;
    newNumber = newNumber.replace(/[^0-9.]/g, '');
    if (path === '/add-outflow') {
      newNumber = `-${newNumber}`;
    }
    /*
        if (dotIndex !== -1){
            return newNumber.substring(0, dotIndex+3);
        }
        */
    return newNumber;
  };

  const add = (event) => {
    event.preventDefault();
    addCashFlow({ value, description }, user.token)
      .then((response) => {
        console.log(response.data);
        history.push('/wallet');
      })
      .catch((error) => {
        const { status } = error.response;
        if (status === 401) {
          logout();
        }
        console.log(error.response);
      });
  };

  return (
    <MainContainer>
      <Title>
        Nova
        {' '}
        {action}
      </Title>
      <Form onSubmit={add}>
        <Input
          placeholder="Valor"
          type="text"
          maxLength={12}
          value={decimalMask(value.replace('.', ''))}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <Input
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <Button type="submit">
          Salvar
          {' '}
          {action}
        </Button>
      </Form>
    </MainContainer>
  );
};

const MainContainer = styled.div`
    padding: 25px 25px 16px 25px;
`;

const Title = styled.span`
    display: flex;
    font-weight: bold;
    font-size: 26px;
    color: white;
    margin-bottom: 40px;
`;

export default AddCashFlow;
