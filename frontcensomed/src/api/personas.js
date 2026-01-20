import api from "./axios";

// Obtener todas las personas
export const getPersonas = async () => {
  const { data } = await api.get("personas");
  return data;
};

// Crear una nueva persona
export const createPersona = async (persona) => {
  const { data } = await api.post("personas", persona);
  return data;
};

// Obtener una persona por su ID
export const getPersonaById = async (id) => {
  const { data } = await api.get(`personas/${id}`);
  return data;
};

// Actualizar una persona
export const updatePersona = async (id, persona) => {
  const { data } = await api.put(`personas/${id}`, persona);
  return data;
};

// Eliminar una persona
export const deletePersona = async (id) => {
  const { data } = await api.delete(`personas/${id}`);
  return data;
};
