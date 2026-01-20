import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

if (!API_URL) {
  console.error("REACT_APP_API_URL no está definida");
}

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
