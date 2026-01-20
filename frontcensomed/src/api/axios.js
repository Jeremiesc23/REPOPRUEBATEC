import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://repopruebatec-756570331238.us-central1.run.app/api",
  headers: { Accept: "application/json" },
});

export default api;
