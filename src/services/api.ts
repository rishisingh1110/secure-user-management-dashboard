import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const login = (data: { email: string; password: string }) =>
  api.post('/login', data);

export const signUp = (data: { email: string; password: string }) =>
  api.post('/register', data);

export const getUsers = () => api.get('/users');
