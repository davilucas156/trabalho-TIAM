import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import styles from './Ranking.module.css';

export default function Ranking() {
  const turmaId = mockUserLogado.idTurma;

  const alunos = mockUsers
    .filter((user) => user.idTurma === turmaId)
    .sort((a, b) => b.pontuacao - a.pontuacao);

  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.rankingContainer}>
          <h2>Ranking da sua Turma</h2>
          <ol className={styles.rankingList}>
            {alunos.map((user, index) => (
              <li
                key={user.id}
                className={`${styles.rankingItem} ${
                  user.id === mockUserLogado.id ? styles.destacado : ''
                }`}
              >
                <span className={styles.posicao}>#{index + 1}</span>
                <span className={styles.nome}>{user.nome}</span>
                <span className={styles.pontuacao}>{user.pontuacao} pts</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
