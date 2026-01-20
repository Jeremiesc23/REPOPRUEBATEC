import axios from "axios";

// En producción: /api (Nginx proxy)
// En desarrollo: setea REACT_APP_API_URL=http://localhost:8080/api si quieres
const API_URL = process.env.REACT_APP_API_URL || "/api";

const api = axios.create({
  baseURL: API_URL,
  headers: { Accept: "application/json" },
});

export default api;
