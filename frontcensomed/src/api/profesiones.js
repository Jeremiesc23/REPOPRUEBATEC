import api from "./axios";

// Obtener todas las profesiones
export const getProfesiones = async () => {
  const { data } = await api.get("profesiones");
  return data;
};

// Crear una nueva profesión
export const createProfesion = async (nombreProfesion) => {
  const { data } = await api.post("profesiones", { nombreProfesion });
  return data;
};

// Actualizar una profesión
export const updateProfesion = async (id, nombreProfesion) => {
  const { data } = await api.put(`profesiones/${id}`, { nombreProfesion });
  return data;
};

// Obtener profesión por ID
export const getProfesionById = async (id) => {
  const { data } = await api.get(`profesiones/${id}`);
  return data;
};

// Eliminar una profesión
export const deleteProfesion = async (id) => {
  await api.delete(`profesiones/${id}`);
};
