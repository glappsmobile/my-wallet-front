
import axios from "axios";
const URL_API = "http://localhost:4000";

const signUp = (body) => axios.post(`${URL_API}/sign-up`, body);

export {
    signUp
}