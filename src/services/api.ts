import axios from 'axios';

export const Production = 'https://sandbox-backend.herokuapp.com/';
export const Dev = 'http://localhost:3333';

const api = axios.create({
  baseURL: Production,
});

export default api;
