export const mockQuizzesByDisciplina = {
  1: [
    {
      id: 101,
      titulo: 'Quiz de Álgebra',
      totalQuestoes: 10,
      respondidas: 6,
      criadoEm: '2024-05-01',
    },
    {
      id: 102,
      titulo: 'Quiz de Geometria',
      totalQuestoes: 8,
      respondidas: 4,
      criadoEm: '2024-05-05',
    },
  ],
  2: [
    {
      id: 201,
      titulo: 'Quiz de Química Orgânica',
      totalQuestoes: 12,
      respondidas: 0,
      criadoEm: '2024-05-10',
    },
  ],
  3: [
    {
      id: 301,
      titulo: 'Quiz de História do Brasil',
      totalQuestoes: 7,
      respondidas: 7,
      criadoEm: '2024-05-11',
    },
    {
      id: 302,
      titulo: 'Quiz de Era Vargas',
      totalQuestoes: 5,
      respondidas: 1,
      criadoEm: '2024-05-12',
    },
  ],
};


export const quizzesMock = [
   {
    id: 101,
    idDisciplina: 1,
    titulo: 'Quiz de Álgebra',
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
  {
    id: 102,
    idDisciplina: 1,
    titulo: 'Quiz de Geometria',
    perguntas: [
      {
        id: 1,
        texto: 'Qual figura tem três lados?',
        alternativas: ['Quadrado', 'Triângulo', 'Círculo', 'Retângulo'],
        correta: 1,
      },
    ],
  },
  {
    id: 201,
    idDisciplina: 2,
    titulo: 'Quiz de Biologia Celular',
    perguntas: [
      {
        id: 1,
        texto: 'Qual organela é responsável pela produção de energia?',
        alternativas: ['Ribossomo', 'Lisossomo', 'Mitocôndria', 'Núcleo'],
        correta: 2,
      },
    ],
  },
];


