import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, ChevronDown } from 'lucide-react';
import styles from './CadastroForm.module.css';

export default function CadastroForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        tipo: 'Usuário'
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
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

            <button type="submit" className={styles.submitButton}>Cadastrar</button>
        </form>
    );
}
