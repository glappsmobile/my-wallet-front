import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import Container from '../shared/Container';
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
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    general: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

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
        } else {
          setErrors({ ...errors, general: 'Um erro inesperado aconteceu, tente novamente mais tarde' });
        }
        setIsLoading(false);
      });
  };

  return (
    <Container paddingX="large">
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
          onChange={handleChange('email')}
          disabled={isLoading}
          required
        />

        <Input
          placeholder="Senha"
          type="password"
          value={formData.password}
          onChange={handleChange('password')}
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

export default SignIn;
