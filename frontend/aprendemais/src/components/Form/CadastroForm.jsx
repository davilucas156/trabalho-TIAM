import { useState } from 'react';
import styles from './CadastroForm.module.css';

export default function CadastroForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        senha: '',
        tipo: 'Usuário'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <h2>Cadastro</h2>

            <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                required
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                required
            />

            <select
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
                required
            >
                <option value="Professor">Professor</option>
                <option value="Aluno">Aluno</option>
            </select>

            <button type="submit">Cadastrar</button>
        </form>
    );
}
