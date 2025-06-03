import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EditarQuizModal from '../../../components/EditarQuizModal/EditarQuizModal';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import styles from './QuizzesProfessor.module.css';
import { mockQuizzesByDisciplina, quizzesMock } from '../../../mocks/mockQuizzes'; // 👈 esse aqui


export default function QuizzesProfessor() {
  const { id } = useParams(); // ID da turma
  const [quizzes, setQuizzes] = useState([]);
  const [quizSelecionado, setQuizSelecionado] = useState(null); // 👈 modal state

  useEffect(() => {
    const data = mockQuizzesByDisciplina[id] || [];
    setQuizzes(data);
  }, [id]);

  const handleSalvarEdicao = (quizAtualizado) => {
    // Opcional: atualiza localmente a lista de quizzes
    setQuizzes((prev) =>
      prev.map((q) => (q.id === quizAtualizado.id ? quizAtualizado : q))
    );
  };

  return (
    <div className={styles.quizzes}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <h2 className={styles.title}>Quizzes da Turma #{id}</h2>

        {quizzes.length === 0 ? (
          <p>Esta turma ainda não possui quizzes.</p>
        ) : (
          <div className={styles.quizList}>
            {quizzes.map((quiz) => (
              <div key={quiz.id} className={styles.quizCard}>
                <h3>{quiz.titulo}</h3>
                <p>{quiz.totalQuestoes} questões</p>
                <p>Criado em: {new Date(quiz.criadoEm).toLocaleDateString()}</p>
                <button onClick={() => {
                  const quizCompleto = quizzesMock.find(q => q.id === quiz.id);
                  if (quizCompleto) {
                    setQuizSelecionado(quizCompleto);
                  } else {
                    alert("Esse quiz ainda não tem conteúdo para edição.");
                  }
                }}>
                  Editar Quiz
                </button>

              </div>
            ))}
          </div>
        )}

        {/* 🔥 Modal de edição */}
        {quizSelecionado && (
          <EditarQuizModal
            quiz={quizSelecionado}
            onClose={() => setQuizSelecionado(null)}
            onSave={handleSalvarEdicao}
          />
        )}
      </div>
    </div>
  );
}
