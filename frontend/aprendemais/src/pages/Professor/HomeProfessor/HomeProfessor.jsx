import { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import WelcomeMessage from '../../../components/WelcomeMessage/WelcomeMessage';
import SubjectCarousel from '../../../components/SubjectCarousel/SubjectCarousel';
import { getTurmas } from '../../../services/turmaService';
import styles from './HomeProfessor.module.css';
import { useNavigate } from 'react-router-dom';

const HomeProfessor = () => {
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    const fetchTurmas = async () => {
      try {
        const data = await getTurmas();
        console.log('Turmas recebidas:', data);

        const mapped = data.map((turma, index) => ({
          id: turma.idTurma,
          name: turma.nome,
          teacher: `Alunos: ${turma.totalAlunos ?? 'N/D'}`,
          totalQuizzes: turma.totalQuizzes ?? 0,
          quizzesDone: turma.quizzesRespondidos ?? 0,
          color: getColorByIndex(index),
        }));

        setTurmas(mapped);
      } catch (error) {
        console.error('Erro ao buscar turmas:', error);
      }
    };

    fetchTurmas();
  }, []);

  const getColorByIndex = (index) => {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];
    return colors[index % colors.length];
  };
  const navigate = useNavigate();
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <WelcomeMessage studentName="Prof. Alexandre" />
        <SubjectCarousel
          subjects={turmas}
          onCardClick={(id) => navigate(`/turmas/${id}/quizzesProfessor`)}
        />

      </div>
    </div>
  );
};

export default HomeProfessor;
