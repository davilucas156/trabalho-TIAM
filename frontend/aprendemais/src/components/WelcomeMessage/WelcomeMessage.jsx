import styles from './WelcomeMessage.module.css';

const WelcomeMessage = ({ studentName }) => {
  return (
    <div className={styles.welcome}>
      <h2>Bem-vindo, {studentName}</h2>
      <p>Suas disciplinas</p>
    </div>
  );
};

export default WelcomeMessage;
