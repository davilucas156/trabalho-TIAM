import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import GenericCard from '../GenericCard/GenericCard';
import styles from './SubjectCarousel.module.css';
import { useNavigate } from 'react-router-dom';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1440 }, items: 4 },
  desktop: { breakpoint: { max: 1440, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};


export default function SubjectCarousel({ subjects, onCardClick }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Suas turmas ➜</h3>
      <Carousel responsive={responsive} infinite={false} arrows>
        {subjects.map((s) => (
          <div style={{ paddingRight: '1rem' }} key={s.id}>
            <GenericCard
              title={s.name}
              subtitle={s.teacher}
              info={`${s.quizzesDone} de ${s.totalQuizzes} feitos`}
              status="completed"
              onClick={() => onCardClick?.(s.id)}
              color={s.color}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}