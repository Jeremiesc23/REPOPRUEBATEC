// src/api/profesiones.js
import axios from './axios';  // Importamos nuestra instancia de Axios

export const getProfesiones = async () => {
    try {
        const response = await axios.get('profesiones');
        console.log("Profesiones recibidas de la API:", response.data); // Agregar log para verificar los datos
        return response.data;
    } catch (error) {
        console.error("Error al obtener las profesiones:", error);
        throw error;
    }
};
// Crear una nueva profesión
export const createProfesion = async (nombreProfesion) => {
    try {
        const response = await axios.post('profesiones', { nombreProfesion });
        return response.data;
    } catch (error) {
        console.error("Error al crear la profesión:", error);
        throw error;
    }
};

// Actualizar una profesión
export const updateProfesion = async (id, nombreProfesion) => {
    try {
        const response = await axios.put(`profesiones/${id}`, { nombreProfesion });
        return response.data;
    } catch (error) {
        console.error("Error al actualizar la profesión:", error);
        throw error;
    }
};
// src/api/profesiones.js
export const getProfesionById = async (id) => {
    try {
        // Asegúrate de que `id` sea el valor correcto y está siendo pasado a la URL
        const response = await axios.get(`profesiones/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error al obtener la profesión por ID:", error);
        throw error;
    }
};


// Eliminar una profesión
export const deleteProfesion = async (id) => {
    try {
        await axios.delete(`profesiones/${id}`);
    } catch (error) {
        console.error("Error al eliminar la profesión:", error);
        throw error;
    }
};
