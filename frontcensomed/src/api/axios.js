import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Accept: "application/json" }, // no Content-Type global
});

export default api;
