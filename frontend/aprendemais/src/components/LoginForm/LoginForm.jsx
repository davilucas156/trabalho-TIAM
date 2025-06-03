import { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import styles from './LoginForm.module.css';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginForm() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('https://localhost:5000/api/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    senha: senha
                }),
            });

            if (response.ok) {
                navigate('/home');
            } else {
                const message = await response.text();
                setError(message || 'Erro ao realizar login.');
            }
        } catch (err) {
            setError('Erro de conexão com o servidor.');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Login</h2>

            <div className={styles.inputGroup}>
                <User className={styles.icon} />
                <input
                    type="text"
                    placeholder="Usuário"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className={styles.inputGroup}>
                <Lock className={styles.icon} />
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={styles.eyeButton}
                    aria-label="Toggle password visibility"
                >
                    {showPassword ? <EyeOff /> : <Eye />}
                </button>
            </div>

            {error && <p style={{ color: 'red', fontSize: '0.8rem' }}>{error}</p>}

            <button onClick={handleLogin} className={styles.loginButton}>
                ENTRAR
            </button>

            <p className={styles.registerText}>
                Novo por aqui? <Link to="/cadastro">Cadastrar-se</Link>
            </p>
        </div>
    );
}
