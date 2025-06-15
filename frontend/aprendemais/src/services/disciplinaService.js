import api from './api';

export const getDisciplinas = async () => api.get('/Disciplinas').then(res => res.data);
export const getDisciplina = async (id) => api.get(`/Disciplinas/${id}`).then(res => res.data);
export const createDisciplina = async (data) => api.post('/Disciplinas', data);
export const updateDisciplina = async (id, data) => api.put(`/Disciplinas/${id}`, data);
export const deleteDisciplina = async (id) => api.delete(`/Disciplinas/${id}`);
<<<<<<< Updated upstream
export const getDisciplinasByTurma = async (idTurma) =>
  api.get(`/Disciplinas/turma/${idTurma}`).then(res => res.data);
=======

export const getQuizzesPorDisciplina = async (idDisciplina) => {
  const response = await api.get(`/Quizs/por-disciplina/${idDisciplina}`);
  return response.data;
};
>>>>>>> Stashed changes

