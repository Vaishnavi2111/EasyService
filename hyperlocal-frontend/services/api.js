// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Now it uses the value from .env
  withCredentials: true, // include cookies if using auth
});

export default api;
