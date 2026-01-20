import api from "./axios";

export const getPersonas = async () => {
  const { data } = await api.get("personas");
  return data;
};

export const createPersona = async (persona) => {
  const { data } = await api.post("personas", persona);
  return data;
};

export const getPersonaById = async (id) => {
  const { data } = await api.get(`personas/${id}`);
  return data;
};

export const updatePersona = async (id, persona) => {
  const { data } = await api.put(`personas/${id}`, persona);
  return data;
};

export const deletePersona = async (id) => {
  const { data } = await api.delete(`personas/${id}`);
  return data;
};
