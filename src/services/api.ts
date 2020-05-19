import axios from 'axios';

const api = axios.create({
  baseURL: 'https://sandbox-backend.herokuapp.com/',
});

export default api;
