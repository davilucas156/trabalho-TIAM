import { useNavigate } from 'react-router-dom';
import LoginForm from '../../../components/LoginForm/LoginForm';
import LogoSection from '../../../components/LogoSection/LogoSection';
import Footer from '../../../components/Footer/Footer';
import styles from './Login.module.css';

export default function Login() {
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const response = await fetch('https://localhost:7271/api/Login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    if (response.ok) {
      const usuarioLogado = await response.json(); // recebe o objeto usuário completo
      
      // Salvar no localStorage para usar depois
      localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogado));

      // Navega baseado no tipo do usuário ('p' para professor, 'a' para aluno)
      if (usuarioLogado.tipo?.toLowerCase() === 'p') {
        navigate('/homeProfessor');
      } else {
        navigate('/home');
      }
    } else {
      const message = await response.text();
      setError(message || 'Erro ao realizar login.');
    }
  } catch (err) {
    setError('Erro de conexão com o servidor.');
  }
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
