import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import WelcomeMessage from '../../../components/WelcomeMessage/WelcomeMessage';
import SubjectCarousel from '../../../components/SubjectCarousel/SubjectCarousel';
import styles from './Home.module.css';

const subjects = [
  {
    id: 1,
    name: 'Ciências Biológicas',
    teacher: 'Professor Paulo jubilut',
    totalQuizzes: 5,
    quizzesDone: 3,
    color: '#a259ff',
  },
  {
    id: 2,
    name: 'Astrologia',
    teacher: 'Professor serjão dos foguetes',
    totalQuizzes: 4,
    quizzesDone: 2,
    color: '#ff4d4d',
  },
    {
    id: 3,
    name: 'Fisica',
    teacher: 'Professor Jardel',
    totalQuizzes: 8,
    quizzesDone: 3,
    color: '#87D95E',
  },
];


const Home = () => {
  return (
    <div className={styles.home}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <WelcomeMessage studentName="João" />
        <SubjectCarousel subjects={subjects} />
      </div>
    </div>
  );
};

export default Home;
