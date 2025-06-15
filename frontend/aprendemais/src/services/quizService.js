import api from './api';

export const getQuiz = async (id) =>
  api.get(`/Quizs/${id}`).then((res) => res.data);

export const getQuizzesByDisciplina = async (idDisciplina) => {
  const response = await api.get('/Quizs');
  return response.data.filter(
    (quiz) => quiz.id_disciplina === parseInt(idDisciplina)
  );
};


export const createQuiz = async (data) => api.post('/Quizs', data);
export const updateQuiz = async (id, data) => api.put(`/Quizs/${id}`, data);
export const deleteQuiz = async (id) => api.delete(`/Quizs/${id}`);
