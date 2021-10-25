import styled from "styled-components";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Home = () => {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Container>
            <TitleContainer>
                <Title>Olá, {user.name}</Title>
            </TitleContainer>

            

            <ButtonsContainer>
                <Link to="/deposit">
                    <Button>
                        Nova entrada
                    </Button>
                </Link>
                <Link to="/withdrawal">
                    <Button>
                        Nova saída
                    </Button>
                </Link>
            </ButtonsContainer>
        </Container>
    );
}

const Container = styled.div`
    padding: 25px 25px 16px 25px;
`;

const Title = styled.span`
    font-weight: bold;
    font-size: 26px;
    line-height: 30.52px;
    color: white;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        width: 23px;
        height: 24px;
        cursor: pointer;
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 155px;
    height: 114px;
    background-color: #a328d6;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 17px;
    line-height: 19.96px;
    font-family: "Raleway", sans-serif;
    padding: 10px;
    cursor: pointer;
    div {
        width: 100%;
        height: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    div img {
        width: 22px;
        height: 22px;
    }
`;


export default Home;