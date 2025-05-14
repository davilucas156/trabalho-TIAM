import styles from './SubjectCard.module.css';
import { FaPlay } from 'react-icons/fa';

export default function SubjectCard({ subject }) {
  const { name, teacher, totalQuizzes, quizzesDone, color } = subject;

  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <div className={styles.inner}>
        <div className={styles.footer}>
          <p className={styles.quizzes}>
            {quizzesDone}/{totalQuizzes} Quizzes
          </p>
          <p className={styles.title}>{name}</p>
          <p className={styles.teacher}>{teacher}</p>
        </div>

        <button className={styles.play}>
          <FaPlay />
        </button>
      </div>
    </div>
  );
}
