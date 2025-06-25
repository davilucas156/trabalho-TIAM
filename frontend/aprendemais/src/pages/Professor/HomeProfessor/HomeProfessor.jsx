import { useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import WelcomeMessage from '../../../components/WelcomeMessage/WelcomeMessage';
import SubjectCarousel from '../../../components/SubjectCarousel/SubjectCarousel';
import { getTurmas, createTurma } from '../../../services/turmaService';
import styles from './HomeProfessor.module.css';
import { useNavigate } from 'react-router-dom';

const HomeProfessor = () => {
  const [turmas, setTurmas] = useState([]);
  const navigate = useNavigate();

  // Pega o usuário logado do localStorage
  const usuarioLogado = typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem('usuarioLogado')) 
    : null;

  // Usa o nome do professor, se existir, ou um padrão
  const nomeProfessor = usuarioLogado?.nome ?? 'Professor';

  const getColorByIndex = (index) => {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];
    return colors[index % colors.length];
  };

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

  useEffect(() => {
    fetchTurmas();
  }, []);

  const handleCriarTurma = async () => {
    const nome = prompt('Digite o nome da nova turma:');
    if (!nome) return;

    const novaTurma = {
      nome,
      dataCriacao: new Date().toISOString(),
    };

    try {
      await createTurma(novaTurma);
      alert('Turma criada com sucesso!');
      await fetchTurmas();
    } catch (error) {
      console.error('Erro ao criar turma:', error);
      alert('Erro ao criar turma');
    }
  };

  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <WelcomeMessage studentName={nomeProfessor} />
        <SubjectCarousel
          subjects={turmas}
          onCardClick={(id) => navigate(`/turmas/${id}/disciplinasTurma`)}
          title="Suas turmas"
        />
        <button onClick={handleCriarTurma} className={styles.criarDisciplinaBtn}>
          ➕ Criar Turma
        </button>
      </div>
    </div>
  );
};

export default HomeProfessor;
