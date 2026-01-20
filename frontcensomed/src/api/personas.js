// src/api/personas.js
import axios from './axios'; // Instancia de Axios con la configuración de base URL

// Obtener todas las personas
export const getPersonas = async () => {
  try {
    const response = await axios.get('personas');
    return response.data;
  } catch (error) {
    console.error("Error al obtener las personas:", error);
    throw error;
  }
};

// Crear una nueva persona
export const createPersona = async (persona) => {
  try {
    const response = await axios.post('personas', persona);
    return response.data;
  } catch (error) {
    console.error("Error al crear la persona:", error);
    throw error;
  }
};

// Obtener una persona por su ID
export const getPersonaById = async (id) => {
  try {
    const response = await axios.get(`personas/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la persona:", error);
    throw error;
  }
};

// Actualizar una persona
export const updatePersona = async (id, persona) => {
  try {
    const response = await axios.put(`personas/${id}`, persona);
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la persona:", error);
    throw error;
  }
};

// Eliminar una persona
export const deletePersona = async (id) => {
  try {
    const response = await axios.delete(`personas/${id}`);
    return response.data; // muchas APIs devuelven vacío; igual no afecta
  } catch (error) {
    console.error("Error al eliminar la persona:", error);
    throw error;
  }
};
