import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Button from '../shared/Button';
import Input from '../shared/Input';
import Form from '../shared/Form';
import Title from '../shared/Title';
import Group from '../shared/Group';
import Text from '../shared/Text';
import { signIn } from '../../services/myWallet.services';

const SignIn = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    email: 'email@teste.com',
    password: '12345678',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const SignInRequest = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signIn(formData)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        setIsLoading(false);
        history.push('/wallet');
      })
      .catch((error) => {
        const { status } = error.response;

        if (status === 401) {
          setErrors({ ...errors, general: 'Email ou senha incorretos' });
        }

        setIsLoading(false);
      });
  };

  return (
    <Container>
      <Title>MyWallet</Title>
      <Form onSubmit={SignInRequest}>
        {errors.general && (
        <ErrorText>
          {errors.general}
        </ErrorText>
        )}

        <Input
          placeholder="E-mail"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({
            ...formData,
            email: e.target.value,
          })}
          disabled={isLoading}
          required
        />

        <Input
          placeholder="Senha"
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({
            ...formData,
            password: e.target.value,
          })}
          disabled={isLoading}
          required
          password
        />

        <Button isLoading={isLoading} type="submit">
          Entrar
        </Button>
      </Form>
      <Group marginTop="huge">
        <Link to="/sign-up">
          <Text weight="bold">Primeira vez? Cadastre-se</Text>
        </Link>
      </Group>

    </Container>
  );
};

const ErrorText = styled.span`
    color: tomato;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0 25px;
`;

export default SignIn;
