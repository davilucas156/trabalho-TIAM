import { useNavigate } from 'react-router-dom';
import LoginForm from '../../../components/LoginForm/LoginForm';
import LogoSection from '../../../components/LogoSection/LogoSection';
import Footer from '../../../components/Footer/Footer';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Aqui você pode validar os campos antes, se quiser
    navigate('/home');
  };

  return (
      <div className={styles.appLayout}>
          <div className={styles.mainContainer}>
        <LoginForm onSubmit={handleLogin} />
        <LogoSection />
      </div>
      <Footer />
    </div>
  );
}
