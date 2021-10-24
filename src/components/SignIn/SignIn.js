import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from '../shared/Button';
import Input from '../shared/Input';
import { Ellipsis } from "react-spinners-css";

const SignIn = () => {
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const SignInRequest = () => {

    }

    return (
        <LoginContainer>
            <Title>MyWallet</Title>
            <Form onSubmit={SignInRequest}>

                <Input
                    placeholder="E-mail"
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                    }
                    disabled={isLoading}
                    required
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    value={formData.password || ""}
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
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
            <Span>
                <Link to="/sign-up">Primeira vez? Cadastre-se</Link>
            </Span>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    padding: 0 25px;
`;

const Title = styled.span`
    font-family: "Saira Stencil One", cursive;
    font-size: 32px;
    line-height: 50.37px;
    color: white;
    text-align: center;
    margin-bottom: ${({ path }) => (path === "/sign-in" ? "24px" : "28px")};
`;

const Form = styled.form`
    input {
        margin-bottom: 13px;
    }
`;

const Span = styled.span`
    font-weight: bold;
    font-size: 15px;
    line-height: 17.61px;
    color: white;
    text-align: center;
    margin-top: ${({ path }) => (path === "/sign-in" ? "36px" : "32px")};
    a {
        text-decoration: none;
        color: inherit;
        cursor: inherit;
    }
`;

export { LoginContainer, Title, Form, Span };

export default SignIn;