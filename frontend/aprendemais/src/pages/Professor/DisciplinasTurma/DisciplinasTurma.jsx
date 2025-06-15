<<<<<<< Updated upstream
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import { getDisciplinasByTurma, createDisciplina } from '../../../services/disciplinaService';
import SubjectCarousel from '../../../components/SubjectCarousel/SubjectCarousel';
import styles from './DisciplinasTurma.module.css';

export default function DisciplinasTurma() {
  const { id } = useParams(); // id da turma
  const [disciplinas, setDisciplinas] = useState([]);
  const navigate = useNavigate();

  const fetchDisciplinas = async () => {
    try {
      const data = await getDisciplinasByTurma(id);
      setDisciplinas(data);
    } catch (error) {
      console.error('Erro ao buscar disciplinas:', error);
    }
  };

  useEffect(() => {
    fetchDisciplinas();
  }, [id]);

  const handleCriarDisciplina = async () => {
    const descricao = prompt('Digite a descrição da nova disciplina:');
    if (!descricao) return;

    try {
      await createDisciplina({
        idTurma: Number(id),
        descricao,
      });
      alert('Disciplina criada com sucesso!');
      fetchDisciplinas(); // Atualiza lista
    } catch (error) {
      console.error('Erro ao criar disciplina:', error);
      alert('Erro ao criar disciplina');
    }
  };

  // Cores para alternar nos cards
  const getColorByIndex = (index) => {
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EC4899'];
    return colors[index % colors.length];
  };

  // Mapeia disciplinas para o formato aceito pelo SubjectCarousel
  const mappedDisciplinas = disciplinas.map((disciplina, index) => ({
    id: disciplina.idDisciplina,
    name: disciplina.descricao,
    teacher: `Disciplina #${disciplina.idDisciplina}`,
    totalQuizzes: disciplina.totalQuizzes ?? 0,
    quizzesDone: disciplina.quizzesRespondidos ?? 0,
    color: getColorByIndex(index),
  }));

  return (
    <div className={styles.quizzes}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <h2 className={styles.title}>Disciplinas da Turma #{id}</h2>

        <button onClick={handleCriarDisciplina} className={styles.botaoCriar}>
          ➕ Criar Disciplina
        </button>

        {disciplinas.length === 0 ? (
          <p>Esta turma ainda não possui disciplinas.</p>
        ) : (
          <SubjectCarousel
            subjects={mappedDisciplinas}
            onCardClick={(idDisciplina) => navigate(`/turmas/${id}/DisciplinasTurma/QuizzesDisciplina?idDisciplina=${idDisciplina}`)}

          />
        )}
      </div>
    </div>
  );
}
=======
import styles from './DisciplinasTurma.module.css';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDisciplinas } from '../../../services/disciplinaService';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import WelcomeMessage from '../../../components/WelcomeMessage/WelcomeMessage';

const DisciplinasTurma = () => {
  const { id } = useParams();
  const [disciplinas, setDisciplinas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const data = await getDisciplinas();
        const filtered = data.filter(d => d.idTurma === Number(id));
        setDisciplinas(filtered);
      } catch (error) {
        console.error('Erro ao buscar disciplinas:', error);
      }
    };

    fetchDisciplinas();
  }, [id]);

  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <WelcomeMessage studentName="Prof. Alexandre" />
        <div className={styles.content}>
          <div className={styles.header}>
            <h2>Disciplinas da Turma {id}</h2>
            <button
              className={styles.createButton}
              onClick={() => navigate(`/turmas/${id}/criar-disciplina`)}
            >
              Criar Nova Disciplina
            </button>
          </div>

          <div className={styles.cardGrid}>
            {disciplinas.map(d => (
              <div
                key={d.idDisciplina}
                className={styles.card}
                onClick={() => navigate(`/disciplinas/${d.idDisciplina}/quizzesProfessor`)}
              >
                <h3>{d.descricao}</h3>
                <p><strong>ID:</strong> {d.idDisciplina}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisciplinasTurma;
>>>>>>> Stashed changes
