import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import QuizForm from '../../../components/QuizForm/QuizForm';
import { getQuizzesByDisciplina, createQuiz, updateQuiz } from '../../../services/quizService';
import { getDisciplina } from '../../../services/disciplinaService';
import styles from './QuizzesDisciplina.module.css';

export default function QuizzesDisciplina() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idDisciplina = queryParams.get('idDisciplina');

  const [quizzes, setQuizzes] = useState([]);
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [quizEditando, setQuizEditando] = useState(null);

  const fetchQuizzes = async () => {
    try {
      const data = await getQuizzesByDisciplina(idDisciplina);
      setQuizzes(data);
    } catch (error) {
      console.error('Erro ao buscar quizzes:', error);
    }
  };

  const fetchDisciplina = async () => {
    try {
      const data = await getDisciplina(idDisciplina);
      setNomeDisciplina(data.descricao || '');
    } catch (error) {
      console.error('Erro ao buscar disciplina:', error);
    }
  };

  useEffect(() => {
    if (idDisciplina) {
      fetchQuizzes();
      fetchDisciplina();
    }
  }, [idDisciplina]);

  const handleSalvarQuiz = async (novoQuiz) => {
    try {
      if (novoQuiz.idQuizzes) {
        // Atualizar quiz existente
        await updateQuiz(novoQuiz.idQuizzes, novoQuiz);
        alert('Quiz atualizado com sucesso!');
      } else {
        // Criar novo quiz
        await createQuiz(novoQuiz);
        alert('Quiz criado com sucesso!');
      }
      setShowModal(false);
      setQuizEditando(null);
      fetchQuizzes();
    } catch (error) {
      console.error('Erro ao salvar quiz:', error);
      alert('Erro ao salvar quiz');
    }
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.page1}>
          <h2 className={styles.title}>
            {nomeDisciplina ? `Quizzes da disciplina ${nomeDisciplina}` : 'Carregando...'}
          </h2>

          <button className={styles.botaoCriar} onClick={() => setShowModal(true)}>
            ➕ Criar Quiz
          </button>

          {quizzes.length === 0 ? (
            <p>Nenhum quiz criado ainda.</p>
          ) : (
            <ul className={styles.quizList}>
              {quizzes.map((quiz) => (
                <li key={quiz.idQuizzes} className={styles.quizItem}>
                  <h4>{quiz.titulo}</h4>
                  <div className="meta">
                    Pontuação: {quiz.perguntas?.[0]?.pontos || 0} pontos <br />
                    Criado em: {new Date(quiz.datCriacao).toLocaleDateString()}
                  </div>
                  <button
                    onClick={() => {
                      setQuizEditando(quiz);
                      setShowModal(true);
                    }}
                  >
                    ✏️ Editar
                  </button>
                </li>
              ))}
            </ul>
          )}

          {showModal && (
            <QuizForm
              idDisciplina={idDisciplina}
              quizEditando={quizEditando}
              onClose={() => {
                setShowModal(false);
                setQuizEditando(null);
              }}
              onSave={handleSalvarQuiz}
            />
          )}
        </div>
      </div>
    </div>
  );
}
