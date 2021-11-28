import axios from 'axios';

const URL_API = 'http://localhost:4000';

const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const signUp = (body) => axios.post(`${URL_API}/sign-up`, body);

const signIn = (body) => axios.post(`${URL_API}/sign-in`, body);

const addCashFlow = (body, token) => axios.post(`${URL_API}/cashflow`, body, getConfig(token));

const getCashFlow = (token) => axios.get(`${URL_API}/cashflow`, getConfig(token));

export {
  signUp,
  signIn,
  addCashFlow,
  getCashFlow,
};
