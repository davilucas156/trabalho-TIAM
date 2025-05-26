import { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import styles from './LoginForm.module.css';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        navigate('/home');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Login</h2>

            <div className={styles.inputGroup}>
                <User className={styles.icon} />
                <input type="text" placeholder="Usuário" />
            </div>

            <div className={styles.inputGroup}>
                <Lock className={styles.icon} />
                <input type={showPassword ? 'text' : 'password'} placeholder="Senha" />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={styles.eyeButton}
                    aria-label="Toggle password visibility"
                >
                    {showPassword ? <EyeOff /> : <Eye />}
                </button>
            </div>

            <button onClick={handleLogin} className={styles.loginButton}>
                ENTRAR
            </button>

            <p className={styles.registerText}>
                Novo por aqui? <Link to="/cadastro">Cadastrar-se</Link>
            </p>
        </div>
    );
}
