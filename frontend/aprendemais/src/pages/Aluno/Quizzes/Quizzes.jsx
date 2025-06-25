import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import styles from './Quizzes.module.css';
import { getQuizzesByDisciplina } from '../../../services/quizService';
import api from '../../../services/api'; // axios configurado

export default function Quizzes() {
  const { id } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [disciplinaNome, setDisciplinaNome] = useState('');
  const [notasFeitas, setNotasFeitas] = useState([]); // array com idQuizzes que aluno já fez
  const navigate = useNavigate();
  const idUsuarioLogado = 1; // pegar do contexto/estado real

  useEffect(() => {
    const fetchQuizzes = async () => {
      const disciplinaId = parseInt(id);

      try {
        const data = await getQuizzesByDisciplina(disciplinaId);
        setQuizzes(data);

        const nome = data?.[0]?.disciplina?.descricao;
        setDisciplinaNome(nome || 'Disciplina');
      } catch (error) {
        console.error('Erro ao buscar quizzes:', error);
        setQuizzes([]);
        setDisciplinaNome('Disciplina');
      }
    };

    const fetchNotas = async () => {
      try {
        const response = await api.get('/Notas', {
          params: { idUsuario: idUsuarioLogado }
        });
        setNotasFeitas(response.data.map(n => n.idQuizzes));
      } catch (error) {
        console.error('Erro ao buscar notas:', error);
      }
    };

    fetchQuizzes();
    fetchNotas();
  }, [id, idUsuarioLogado]);

  return (
    <div className={styles.quizzes}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />

        <h2 className={styles.title}>Quizzes de {disciplinaNome}</h2>

        {quizzes.length === 0 ? (
          <p>Esta disciplina ainda não possui quizzes.</p>
        ) : (
          <div className={styles.quizList}>
            {quizzes.map((quiz) => {
              const jaFeito = notasFeitas.includes(quiz.idQuizzes);

              return (
                <div key={quiz.idQuizzes} className={styles.quizCard}>
                  <h3>{quiz.titulo}</h3>
                  <p>{quiz.pergunta?.length ?? 0} questões no total</p>
                  <button
                    disabled={jaFeito}
                    onClick={() => navigate(`/quizzes/${quiz.idQuizzes}/resolver`)}
                  >
                    {jaFeito ? 'Quiz Já Feito' : 'Iniciar Quiz'}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
