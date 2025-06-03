import api from './api';

export const getTurmas = async () => api.get('/Turmas').then(res => res.data);
export const getTurma = async (id) => api.get(`/Turmas/${id}`).then(res => res.data);
export const createTurma = async (data) => api.post('/Turmas', data);
export const updateTurma = async (id, data) => api.put(`/Turmas/${id}`, data);
export const deleteTurma = async (id) => api.delete(`/Turmas/${id}`);
