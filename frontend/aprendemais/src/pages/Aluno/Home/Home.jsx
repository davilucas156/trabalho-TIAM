import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import SubjectCarousel from '../../../components/SubjectCarousel/SubjectCarousel';
import WelcomeMessage from '../../../components/WelcomeMessage/WelcomeMessage';
import { getDisciplinas } from '../../../services/disciplinaService';
import styles from './Home.module.css';

const Home = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));
  const nomeAluno = usuarioLogado?.nome || 'Aluno';

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const data = await getDisciplinas();

        const mapped = data.map((disciplina, index) => ({
          id: disciplina.idDisciplina,
          name: disciplina.descricao,
          teacher: disciplina.idTurmaNavigation?.nomeProfessor ?? 'Professor não informado',
          totalQuizzes: disciplina.idQuizzesNavigation?.totalQuestoes ?? 0,
          quizzesDone: disciplina.idQuizzesNavigation?.respondidas ?? 0,
          color: getColorByIndex(index),
        }));
        setSubjects(mapped);
      } catch (error) {
        console.error('Erro ao buscar disciplinas:', error);
      }
    };

    fetchSubjects();
  }, []);

  const getColorByIndex = (index) => {
    const colors = ['#a259ff', '#ff4d4d', '#87D95E', '#4CB9E7', '#FFD93D'];
    return colors[index % colors.length];
  };

  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <WelcomeMessage studentName={nomeAluno} />
        <SubjectCarousel
          subjects={subjects}
          onCardClick={(id) => navigate(`/disciplinas/${id}/quizzes`)}
          title="Suas disciplinas"
        />

      </div>
    </div>
  );
};

export default Home;
