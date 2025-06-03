import api from './api';

export const getUsuarios = async () => api.get('/Usuarios').then(res => res.data);
export const getUsuario = async (id) => api.get(`/Usuarios/${id}`).then(res => res.data);
export const createUsuario = async (data) => api.post('/Usuarios', data);
export const updateUsuario = async (id, data) => api.put(`/Usuarios/${id}`, data);
export const deleteUsuario = async (id) => api.delete(`/Usuarios/${id}`);
