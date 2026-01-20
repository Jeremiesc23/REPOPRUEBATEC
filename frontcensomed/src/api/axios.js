import axios from "axios";

// Siempre mismo dominio del FRONT, Nginx lo proxy a tu back
const api = axios.create({
  baseURL: "/api",
  headers: { Accept: "application/json" },
});

export default api;
