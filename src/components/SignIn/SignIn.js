import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from '../shared/Button';
import Input from '../shared/Input';
import { Ellipsis } from "react-spinners-css";
import { signIn } from '../../services/myWallet.services';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: "email@teste.com",
        password: "123456"
    });

    const [isLoading, setIsLoading] = useState(false);

    const SignInRequest = (e) => {
        e.preventDefault();
        setIsLoading(true);

    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={SignInRequest}>

                <Input
                    placeholder="E-mail"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                        setFormData({ 
                            ...formData, 
                            email: e.target.value 
                        })
                    }
                    disabled={isLoading}
                    required
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    value={formData.password}
                    onChange={(e) =>
                        setFormData({ 
                            ...formData, 
                            password: e.target.value 
                        })
                    }
                    disabled={isLoading}
                    required
                />

                <Button type="submit">
                    {isLoading ? (
                        <Ellipsis color="white" />
                    ) : (
                        "Entrar"
                    )}
                </Button>
            </Form>

            <ContainerLink>
                <Link to="/sign-up">
                    Primeira vez? Cadastre-se
                </Link>
            </ContainerLink>
        </Container>
    )
}

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

export default SignIn;