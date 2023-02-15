import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986', 
});

Axios.interceptors.response.use(
    response => response,
    error => error.response
)
export default Axios;