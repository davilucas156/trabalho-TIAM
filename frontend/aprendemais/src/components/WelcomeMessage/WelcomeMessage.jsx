import styles from './WelcomeMessage.module.css';

const WelcomeMessage = ({ studentName }) => {
  return (
    <div className={styles.welcome}>
      <h2>Bem-vindo, {studentName}</h2>
    </div>
  );
};

export default WelcomeMessage;
