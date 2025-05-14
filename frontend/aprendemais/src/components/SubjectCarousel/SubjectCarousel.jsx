import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SubjectCard from '../SubjectCard/SubjectCard';
import styles from './SubjectCarousel.module.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export default function SubjectCarousel({ subjects }) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Suas turmas ➜</h3>
      <div className={styles.carousel}>
        {subjects.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </div>
    </div>
  );
}
