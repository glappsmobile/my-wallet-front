import axios from 'axios';

const URL_API = 'http://localhost:4000';

const getConfig = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const signUp = (body) => axios.post(`${URL_API}/sign-up`, body);

const signIn = (body) => axios.post(`${URL_API}/sign-in`, body);

const getUser = (token) => axios.get(`${URL_API}/user`, getConfig(token));

const addCashFlow = (body, token) => axios.post(`${URL_API}/transactions`, body, getConfig(token));

const getCashFlow = (token) => axios.get(`${URL_API}/transactions`, getConfig(token));

export {
  signUp,
  signIn,
  getUser,
  addCashFlow,
  getCashFlow,
};
