// src/api/profesiones.js
import api from './axios';

// Obtener todas las profesiones
export const getProfesiones = async () => {
  try {
    const response = await api.get('/profesiones');
    return response.data;
  } catch (error) {
    console.error("Error al obtener las profesiones:", error);
    throw error;
  }
};

// Crear una nueva profesión
export const createProfesion = async (nombreProfesion) => {
  try {
    const response = await api.post('/profesiones', { nombreProfesion });
    return response.data;
  } catch (error) {
    console.error("Error al crear la profesión:", error);
    throw error;
  }
};

// Actualizar una profesión
export const updateProfesion = async (id, nombreProfesion) => {
  try {
    const response = await api.put(`/profesiones/${id}`, { nombreProfesion });
    return response.data;
  } catch (error) {
    console.error("Error al actualizar la profesión:", error);
    throw error;
  }
};

// Obtener profesión por ID
export const getProfesionById = async (id) => {
  try {
    const response = await api.get(`/profesiones/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener la profesión por ID:", error);
    throw error;
  }
};

// Eliminar una profesión
export const deleteProfesion = async (id) => {
  try {
    await api.delete(`/profesiones/${id}`);
  } catch (error) {
    console.error("Error al eliminar la profesión:", error);
    throw error;
  }
};
