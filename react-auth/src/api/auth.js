import axios from 'axios';
const API = 'http://localhost:4000/api/auth';

export const login = (email, password) => axios.post(`${API}/login`, { email, password });
export const register = (email, password) => axios.post(`${API}/register`, { email, password });
export const getUser = (token) =>
  axios.get(`${API}/dashboard`, { headers: { Authorization: token } });
