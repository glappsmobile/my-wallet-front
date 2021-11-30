import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Container from '../shared/Container';
import Group from '../shared/Group';
import Form from '../shared/Form';
import Button from '../shared/Button';
import Text from '../shared/Text';
import Title from '../shared/Title';
import Input from '../shared/Input';
import SuccessMessage from './SuccessMessage';
import { signUp } from '../../services/myWallet.services';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    general: '',
  });

  const [registered, setRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setErrors({ ...errors, [prop]: '' });
    if (prop === 'password' || prop === 'confirmPassword') {
      setErrors({ ...errors, confirmPassword: '', password: '' });
    }

    setFormData({ ...formData, [prop]: event.target.value });
  };

  const SignUpRequest = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const {
      name, email, password, confirmPassword,
    } = formData;

    if (password !== confirmPassword) {
      setErrors({ ...errors, password: 'As senhas não coincidem' });
      setIsLoading(false);
      return;
    }

    signUp({ name, email, password })
      .then(() => {
        setRegistered(true);
        setIsLoading(false);
      })
      .catch((error) => {
        const { status } = error.response;

        if (status === 409) {
          setErrors({ ...errors, email: 'Este email já está cadastrado' });
        } if (registered) {
          return (
            <Container>
              <SuccessMessage />
            </Container>
          );
        }
        setIsLoading(false);
        return true;
      });
  };

  return !registered ? (
    <Container paddingX="large">
      <Group>
        <Title>MyWallet</Title>
        <Form onSubmit={SignUpRequest}>
          {errors.general && (
          <Text variant="helper">
            {errors.general}
          </Text>
          )}
          <Input
            placeholder="Nome"
            type="text"
            value={formData.name}
            error={errors.name}
            minLength={2}
            maxLength={50}
            onChange={handleChange('name')}
            disabled={isLoading}
            required
          />

          <Input
            placeholder="E-mail"
            type="email"
            value={formData.email}
            error={errors.email}
            maxLength={150}
            onChange={handleChange('email')}
            disabled={isLoading}
            required
          />

          <Input
            placeholder="Senha"
            type="password"
            value={formData.password}
            error={errors.password}
            minLength={8}
            maxLength={150}
            onChange={handleChange('password')}
            disabled={isLoading}
            password
            required
          />

          <Input
            placeholder="Confirme a senha"
            type="password"
            value={formData.confirmPassword}
            error={errors.confirmPassword}
            onChange={handleChange('confirmPassword')}
            disabled={isLoading}
            password
            required
          />

          <Button isLoading={isLoading} type="submit">
            Cadastrar
          </Button>
        </Form>
        <Group marginTop="huge">
          <Link to="/sign-in">
            <Text fontWeight="bold">
              Já tem uma conta? Entre agora!
            </Text>
          </Link>
        </Group>
      </Group>
    </Container>
  ) : (
    <Container>
      <SuccessMessage />
    </Container>
  );
};

export default SignUp;
