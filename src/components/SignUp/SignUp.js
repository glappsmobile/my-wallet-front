import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from '../shared/Button';
import Input from '../shared/Input';
import { Ellipsis } from "react-spinners-css";

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: "Glauco",
        email: "email@teste.com",
        password: "123456",
        confirmPassword: "123456"
    });    
    const [isLoading, setIsLoading] = useState(false);

    const SignInRequest = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <Container>
            <Title>MyWallet</Title>
            <Form onSubmit={SignInRequest}>

                <Input
                    placeholder="Nome"
                    type="text"
                    value={formData.name}
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