// src/api/axios.js
import axios from 'axios';

// Aquí aseguramos que estamos apuntando a localhost:8080
const API_URL = 'http://localhost:8080/api/';

// Crear la instancia de axios con la URL base
const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default instance;
