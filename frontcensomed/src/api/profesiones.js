import api from "./axios";

export const getProfesiones = async () => {
  const { data } = await api.get("profesiones");
  return data;
};

export const createProfesion = async (nombreProfesion) => {
  const { data } = await api.post("profesiones", { nombreProfesion });
  return data;
};

export const updateProfesion = async (id, nombreProfesion) => {
  const { data } = await api.put(`profesiones/${id}`, { nombreProfesion });
  return data;
};

export const getProfesionById = async (id) => {
  const { data } = await api.get(`profesiones/${id}`);
  return data;
};

export const deleteProfesion = async (id) => {
  await api.delete(`profesiones/${id}`);
};
