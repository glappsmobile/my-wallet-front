import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { IoMdExit, IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import dayjs from 'dayjs';
import { Link, useHistory } from 'react-router-dom';
import { css } from 'styled-components/macro';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { getCashFlow } from '../../services/myWallet.services';
import UserContext from '../../contexts/UserContext';
import Container from '../shared/Container';
import Group from '../shared/Group';
import Text from '../shared/Text';
import unselectable from '../../styles/utils/unselectable';
import noHighlight from '../../styles/utils/noHighlight';

const Wallet = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [cashFlow, setCashFlow] = useState({
    transactions: [],
    total: 0,
  });

  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('Asia/Tokyo');

  const logout = () => {
    localStorage.removeItem('user');
    history.push('/sign-in');
  };

  useEffect(() => {
    getCashFlow(user.token)
      .then((res) => {
        console.log(res.data);
        setCashFlow(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Container
      paddingX="medium"
      paddingY="medium"
      flexProps={{ alignItems: 'flex-start' }}
    >
      <Grid>
        <Group flexProps={{ justifyContent: 'space-between', row: true }}>
          <Text variant="title" maxWidth="250px">
            Olá,
            {' '}
            {user.name}
          </Text>
          <LogoutIcon onClick={() => logout()} />
        </Group>

        <TransactionsContainer>
          {(cashFlow.transactions[0]) ? (
            <>
              <List>
                {cashFlow.transactions.map(({
                  value, description, createdAt, id,
                }) => (
                  <Transaction key={id}>
                    <Text color="gray" fontSize="small">
                      {dayjs(createdAt).format('DD/MM') }
                    </Text>
                    <Text color="black" fontSize="small" maxWidth="100%">
                      {description}
                    </Text>

                    <Text
                      fontSize="small"
                      color={value >= 0 ? 'green' : 'red'}
                    >
                      {Number(value).toFixed(2)}
                    </Text>
                  </Transaction>
                ))}
              </List>

              <Group
                flexProps={{ row: true, justifyContent: 'space-between' }}
                paddingX="medium"
                paddingY="medium"
              >
                <strong>SALDO</strong>
                <Text
                  color={cashFlow.total >= 0 ? 'green' : 'red'}
                  fontWeight="bold"
                >
                  R$
                  {' '}
                  {cashFlow.total}
                </Text>
              </Group>
            </>
          ) : (
            <Group>
              <Text color="black">Não há registros de entrada ou saída</Text>
            </Group>
          )}
        </TransactionsContainer>

        <ButtonContainer>
          <Button to="add-inflow">
            <IoIosAddCircleOutline />
            <span>
              Nova
              <br />
              entrada
            </span>
          </Button>

          <Button to="add-outflow">
            <IoIosRemoveCircleOutline />
            Nova
            <br />
            saída
          </Button>
        </ButtonContainer>
      </Grid>
    </Container>
  );
};

const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 20px 1fr 100px;
  grid-template-columns: 100%;
  grid-gap: 20px;  
`;

const LogoutIcon = styled(IoMdExit)`
  ${({ theme }) => css`
    font-size: ${theme.font.size.extraLarge};
    color: ${theme.color.text}
  `}
`;

const TransactionsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.color.white};
    border-radius: 5px;
  `}
`;

const List = styled.ul`
    margin: 21px 12px 0px 12px;
`;

const Transaction = styled.li`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 35px 1fr min-content;
    grid-template-rows: 100%;
    grid-gap: ${theme.spacing.medium};
    margin-bottom: ${theme.spacing.medium};
    max-width: 100%;
  `}
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
`;

const Button = styled(Link)`
  ${({ theme }) => css`
    width: calc(50% - 8px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.color.primaryLight};
    color: ${theme.color.text};
    font-weight: bold;
    border: none;
    border-radius: 5px;
    font-size: ${theme.font.size.large};
    padding: ${theme.spacing.medium};
    text-align: left;
    overflow: hidden;
    ${unselectable()}
    ${noHighlight()}
    & svg {
        font-size: 27px;
    }
  `}
`;

export default Wallet;
