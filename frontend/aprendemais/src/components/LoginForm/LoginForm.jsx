import styles from './LoginForm.module.css';
import userIcon from '../../assets/user.png';
import eyeIcon from '../../assets/password.png';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom'; // ← IMPORTANTE

export default function LoginForm() {
  const navigate = useNavigate(); // ← HOOK DO REACT ROUTER

  const handleLogin = () => {
    // Aqui você pode validar inputs antes, se quiser
    navigate('/home'); // ← REDIRECIONA
  };

  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Login</h1>
      <div className={styles.inputGroup}>
        <input type="text" placeholder="Usuário" />
        <img src={userIcon} alt="User Icon" />
      </div>
      <div className={styles.inputGroup}>
        <input type="password" placeholder="Senha" />
        <img src={eyeIcon} alt="Eye Icon" />
      </div>

      <Button onClick={handleLogin} className={styles.loginButton}>
        ENTRAR
      </Button>

      <p className={styles.registerText}>
        Novo por aqui? <a href="#">Cadastra-se</a>
      </p>
    </div>
  );
}
