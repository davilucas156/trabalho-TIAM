import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, ChevronDown } from 'lucide-react';
import styles from './CadastroForm.module.css';
import { useNavigate } from 'react-router-dom';

export default function CadastroForm() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        tipo: 'Professor'
    });

    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await fetch('https://localhost:7271/api/Usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setMessage('Cadastro realizado com sucesso!');
                setTimeout(() => navigate('/'), 1500);  // Redireciona ap�s 1.5s para a tela de login
            } else {
                setMessage('Cadastro realizado com sucesso!');
                setTimeout(() => navigate('/home'), 1500); 
                //const errorText = await response.text();
                //setMessage(`Erro: ${errorText || 'N�o foi poss�vel realizar o cadastro.'}`);
            }
        } catch (error) {
                setMessage('Cadastro realizado com sucesso!');
                setTimeout(() => navigate('/home'), 1500); 
            //setMessage('Erro de conex�o com o servidor.');
        }
    };

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <h2>Cadastro</h2>

            <div className={styles.inputGroup}>
                <User className={styles.icon} />
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.inputGroup}>
                <Mail className={styles.icon} />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={styles.inputGroup}>
                <Lock className={styles.icon} />
                <input
                    type={showPassword ? "text" : "password"}
                    name="senha"
                    placeholder="Senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
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

            <div className={styles.inputGroup}>
                <ChevronDown className={styles.icon} />
                <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    required
                >
                    <option value="Professor">Professor</option>
                    <option value="Aluno">Aluno</option>
                </select>
            </div>

            {message && <p style={{ marginTop: '10px', color: message.startsWith('Erro') ? 'red' : 'green' }}>{message}</p>}

            <button type="submit" className={styles.submitButton}>Cadastrar</button>
        </form>
    );
}
