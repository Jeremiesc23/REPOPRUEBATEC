import axios from "axios";

// Con Nginx proxy, SIEMPRE debe ser /api en producción
const api = axios.create({
  baseURL: "/api",
  headers: { Accept: "application/json" },
});

export default api;
