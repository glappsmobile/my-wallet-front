import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { IoMdExit, IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import dayjs from 'dayjs';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";
import { getCashFlow } from '../../services/myWallet.services'


export default function Wallet() {
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem("user"));
    const [cashFlow, setCashFlow] = useState([]);

    const logout = () => {
        localStorage.removeItem("user");
        history.push("/sign-in");
    }
    
    useEffect(() => {
        getCashFlow(user.token)
            .then((res) => {
                setCashFlow(res.data)
            })
            .catch((error) => {
                const status = error.response.status;
                if (status === 401) {
                    logout();
                }
            });
    }, []);


    let total = 0;

    cashFlow.forEach((flow) => {
        total += Number(flow.value);
    })

    return (
        <Container>
            <Title>
                <span>Olá, {user.name}</span>
                <IoMdExit onClick={() => logout()} />
            </Title>

            <CashFlowContainer>
                {(cashFlow[0]) ? (
                    <>
                        <List>
                            {cashFlow.map(({value, description, createdAt}, index) =>
                                <Row key={index}>
                                    <div>
                                        <DateText>
                                            {dayjs(createdAt).format('DD/MM')}
                                        </DateText>

                                        <span>
                                            {description}
                                        </span>
                                    </div>
                                    <Value isInflow={value > 0}>
                                        {value}
                                    </Value>
                                </Row>
                            )}
                        </List>

                        <Ballance isInflow={total > 0}>
                            <strong>SALDO</strong>
                            <span>
                                {total}
                            </span>
                        </Ballance>
                    </> 
                ) : (
                    <NoInfoContainer>
                        <span>Não há registros de entrada ou saída</span>
                    </NoInfoContainer>
                )}
            </CashFlowContainer>

            <ButtonContainer>
                <BigButton to={'add-inflow'}>
                    <IoIosAddCircleOutline />
                    <span>Nova <br /> entrada</span>
                </BigButton>

                <BigButton to={'add-outflow'}>
                    <IoIosRemoveCircleOutline />
                    Nova  <br/> saída
                </BigButton>
            </ButtonContainer>
        </Container>
    )
};

const DateText = styled.span`
    margin-right: 5px;
    color: #C6C6C6;
`;
const Container = styled.div`
  padding: 20px 15px 5px 15px;
`;

const Title = styled.h1`
	display: flex;
    justify-content: space-between;
    font-size: 24px;
    margin-bottom: 22px;
    color: #FFFFFF;
    font-weight: bold;
    padding-left: 10px;

    & span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 90%;
    }
`;

const ButtonContainer = styled.div`
    height: 114px;
    display: flex;
    justify-content: space-between;
`;

const BigButton = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(50% - 8px);
    background-color: #A328D6;
    color: #FFFFFF;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    font-size: 19px;
    padding: 10px;
    text-align: left;

    &svg {
        font-size: 27px;
    }
`;

const NoInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 20px;
    color: #868686;
    margin: auto;

    &span {
        width: 250px;
        text-align: center;
    }
`;

const CashFlowContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    display: flex;
    height: calc(86vh - 114px);
    flex-direction: column;
    justify-content: space-between;
`;

const List = styled.ul`
    font-size: 16px;
    margin: 21px 12px 0px 12px;
    overflow: auto;
`;

const Row = styled.li`
    display: flex;
    justify-content: space-between;

    &span {
        margin-right: 10px;
        color: #C6C6C6;
    }

    &div {
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: calc(70%);
    }


    margin-bottom: 20px;
`;

const Value = styled.b`
    color: ${({ isInflow }) => isInflow ? "#03AC00" : "#C70000"};
`;

const Ballance = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 13px;
    font-size: 17px;

    span {
        color: ${({ isInflow }) => isInflow ? "#03AC00" : "#C70000"};
        font-weight: bold;
    }
`;