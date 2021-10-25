import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from '../shared/Button';
import Input from '../shared/Input';
import SuccessMessage from './SuccessMessage';

import { Ellipsis } from "react-spinners-css";
import { signUp } from '../../services/myWallet.services';


const SignUp = () => {
    const [registered, setRegistered] = useState(false);

    const [formData, setFormData] = useState({
        name: "Glauco",
        email: "email@teste.com",
        password: "12345678",
        confirmPassword: "12345678"
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    if (registered) {
        return (
            <Container>
                <SuccessMessage />
            </Container>
        )
    }

    const setEmail = (email) => {
        if (errors.email){
            setErrors({ ...errors, email: false });
        }
        setFormData({...formData, email});
    }

    const SignUpRequest = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const { name, email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            setErrors({ ...errors, password:"As senhas não coincidem"})
            return;
        }

        signUp({ name, email, password})
            .then((response) => {
                console.log(response.status);
                setRegistered(true);
                setIsLoading(false);
            })
            .catch((error) => {
                const status = error.response.status;

                if (status === 409){
                    setErrors({...errors, email: "Este email já está cadastrado"});
                }

                console.log(error.response.status);
                setIsLoading(false);
            });
        console.log(formData);
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={SignUpRequest}>
                {errors.general && (
                    <ErrorText>
                        {errors.general}
                    </ErrorText>
                )}
                <Input
                    placeholder="Nome"
                    type="text"
                    value={formData.name}
                    minLength={2}
                    maxLength={50}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            name: e.target.value
                        })
                    }
                    disabled={isLoading}
                    required
                />

                <Input
                    placeholder="E-mail"
                    type="email"
                    value={formData.email}
                    maxLength={150}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                />

                {errors.email && (
                    <ErrorText>
                        {errors.email}
                    </ErrorText>
                )}

                <Input
                    placeholder="Senha"
                    type="password"
                    value={formData.password}
                    minLength={8}
                    maxLength={150}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            password: e.target.value
                        })
                    }
                    disabled={isLoading}
                    required
                />

                <Input
                    placeholder="Confirme a senha"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            confirmPassword: e.target.value
                        })
                    }
                    disabled={isLoading}
                    required
                />

                {errors.password && (
                    <ErrorText>
                        {errors.password}
                    </ErrorText>
                )}


                <Button type="submit">
                    {isLoading ? (
                        <Ellipsis color="white" />
                    ) : (
                        "Cadastrar"
                    )}
                </Button>
            </Form>
            <ContainerLink>
                <Link to="/sign-in">
                    Já tem uma conta? Entre agora!
                </Link>
            </ContainerLink>
        </Container>
    )
}

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

const Title = styled.span`
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    color: white;
    text-align: center;
    margin-bottom: 24px;
`;

const Form = styled.form`
    display: grid;
    row-gap: 13px;
`;

const ContainerLink = styled.div`
    font-weight: bold;
    font-size: 15px;
    color: white;
    text-align: center;
    margin-top: 36px;
`;

export default SignUp;