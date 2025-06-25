import { useEffect, useState } from 'react';
import styles from './QuizForm.module.css';

export default function QuizForm({ idDisciplina, onClose, onSave, quizEditando }) {
  const [titulo, setTitulo] = useState('');
  const [perguntas, setPerguntas] = useState([
    {
      enunciado: '',
      img: '',
      pontos: 0,
      tipo: 'm',
      alternativas: [{ descricao: '', correto: false }],
    },
  ]);

  // Sincroniza os estados locais quando quizEditando muda (abrir modal para editar)
  useEffect(() => {
    if (quizEditando) {
      setTitulo(quizEditando.titulo || '');
      setPerguntas(
        quizEditando.perguntas?.length > 0
          ? quizEditando.perguntas.map((p) => ({
              enunciado: p.enunciado || '',
              img: p.img || '',
              pontos: p.pontos || 0,
              tipo: p.tipo || 'm',
              alternativas:
                p.alternativas && p.alternativas.length > 0
                  ? p.alternativas
                  : [{ descricao: '', correto: false }],
            }))
          : [
              {
                enunciado: '',
                img: '',
                pontos: 0,
                tipo: 'm',
                alternativas: [{ descricao: '', correto: false }],
              },
            ]
      );
    } else {
      // Limpar campos se for novo quiz
      setTitulo('');
      setPerguntas([
        {
          enunciado: '',
          img: '',
          pontos: 0,
          tipo: 'm',
          alternativas: [{ descricao: '', correto: false }],
        },
      ]);
    }
  }, [quizEditando]);

  const handlePerguntaChange = (index, field, value) => {
    const novasPerguntas = [...perguntas];
    novasPerguntas[index][field] = value;
    setPerguntas(novasPerguntas);
  };

  const handleAlternativaChange = (pIndex, aIndex, field, value) => {
    const novasPerguntas = [...perguntas];
    novasPerguntas[pIndex].alternativas[aIndex][field] =
      field === 'correto' ? value.target.checked : value.target.value;
    setPerguntas(novasPerguntas);
  };

  const addPergunta = () => {
    setPerguntas([
      ...perguntas,
      {
        enunciado: '',
        img: '',
        pontos: 0,
        tipo: 'm',
        alternativas: [{ descricao: '', correto: false }],
      },
    ]);
  };

  const addAlternativa = (index) => {
    const novasPerguntas = [...perguntas];
    novasPerguntas[index].alternativas.push({ descricao: '', correto: false });
    setPerguntas(novasPerguntas);
  };

  const handleSubmit = () => {
    onSave({
      id_disciplina: parseInt(idDisciplina),
      id_criador: 1, // substituir pelo ID real
      titulo,
      datCriacao: quizEditando?.datCriacao || new Date().toISOString(),
      perguntas,
      idQuizzes: quizEditando?.idQuizzes, // importante para update
    });
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContentScrollable}>
        <h3>{quizEditando ? 'Editar Quiz' : 'Criar Novo Quiz'}</h3>

        <label>Título do Quiz:</label>
        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />

        {perguntas.map((pergunta, pIndex) => (
          <div key={pIndex} className={styles.perguntaBloco}>
            <h4>Pergunta {pIndex + 1}</h4>

            <label>Enunciado:</label>
            <input
              value={pergunta.enunciado}
              onChange={(e) => handlePerguntaChange(pIndex, 'enunciado', e.target.value)}
            />

            <label>Imagem (URL):</label>
            <input
              value={pergunta.img}
              onChange={(e) => handlePerguntaChange(pIndex, 'img', e.target.value)}
            />

            <label>Pontos:</label>
            <input
              type="number"
              value={pergunta.pontos}
              onChange={(e) =>
                handlePerguntaChange(pIndex, 'pontos', parseInt(e.target.value) || 0)
              }
            />

            <label>Tipo:</label>
            <input
              value={pergunta.tipo}
              onChange={(e) => handlePerguntaChange(pIndex, 'tipo', e.target.value)}
            />

            <h5>Alternativas:</h5>
            {pergunta.alternativas.map((alt, aIndex) => (
              <div key={aIndex} className={styles.alternativaItem}>
                <input
                  placeholder={`Alternativa ${aIndex + 1}`}
                  value={alt.descricao}
                  onChange={(e) => handleAlternativaChange(pIndex, aIndex, 'descricao', e)}
                />
                <label>
                  Correta?{' '}
                  <input
                    type="checkbox"
                    checked={alt.correto}
                    onChange={(e) => handleAlternativaChange(pIndex, aIndex, 'correto', e)}
                  />
                </label>
              </div>
            ))}

            <button type="button" onClick={() => addAlternativa(pIndex)}>
              ➕ Adicionar Alternativa
            </button>
          </div>
        ))}

        <button type="button" onClick={addPergunta}>
          ➕ Adicionar Nova Pergunta
        </button>

        <br />
        <button onClick={handleSubmit}>Salvar Quiz</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}
