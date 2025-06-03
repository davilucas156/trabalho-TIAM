import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import styles from './Quizzes.module.css';
import { quizzesMock } from '../../../mocks/mockQuizzes';

export default function Quizzes() {
  const { id } = useParams(); // ID da disciplina
  const [quizzes, setQuizzes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const disciplinaId = parseInt(id);
    const data = quizzesMock.filter(q => q.idDisciplina === disciplinaId);
    setQuizzes(data);
  }, [id]);

  return (
    <div className={styles.quizzes}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <h2 className={styles.title}>Quizzes da Disciplina #{id}</h2>
        {quizzes.length === 0 ? (
          <p>Esta disciplina ainda não possui quizzes.</p>
        ) : (
          <div className={styles.quizList}>
            {quizzes.map((quiz) => (
              <div key={quiz.id} className={styles.quizCard}>
                <h3>{quiz.titulo}</h3>
                <p>{quiz.perguntas.length} questões no total</p>
                <button onClick={() => navigate(`/quizzes/${quiz.id}/resolver`)}>
                  Iniciar Quiz
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
