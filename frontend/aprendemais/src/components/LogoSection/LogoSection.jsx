import styles from './LogoSection.module.css';
import illustration from '../../assets/LogoAprendeMais.png';

export default function LogoSection() {
  return (
    <div className={styles.logoContainer}>
      <img src={illustration} alt="Login Illustration" className={styles.image} />
    </div>
  );
}
