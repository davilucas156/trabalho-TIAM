export const mockQuizzesCompletos = [
  {
    id: 101,
    titulo: 'Quiz de Álgebra',
    idDisciplina: 1,
    perguntas: [
      {
        id: 1,
        texto: 'Quanto é 3 + 2?',
        alternativas: ['4', '5', '6', '7'],
        correta: 1,
        explicacao: '3 + 2 = 5. A alternativa B está correta.',
      },
      {
        id: 2,
        texto: 'Qual é o valor de x na equação x + 2 = 6?',
        alternativas: ['2', '4', '6', '8'],
        correta: 1,
        explicacao: 'Subtraindo 2 de ambos os lados: x = 4.',
      },
    ],
  },
  // outros quizzes...
];
