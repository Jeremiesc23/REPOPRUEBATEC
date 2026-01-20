import axios from 'axios';

const API_URL =
  process.env.REACT_APP_API_URL ||
  'https://repopruebatec-756570331238.us-central1.run.app/api';

console.log('🔥 AXIOS BASE URL EN BUILD:', API_URL);

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
