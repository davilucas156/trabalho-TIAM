import { useState } from 'react';
import styles from './EditarQuizModal.module.css';

export default function EditarQuizModal({ quiz, onClose, onSave }) {
    const [titulo, setTitulo] = useState(quiz.titulo);
    const [perguntas, setPerguntas] = useState(quiz.perguntas || []);


    const atualizarPergunta = (id, campo, valor) => {
        setPerguntas(prev =>
            prev.map(p => (p.id === id ? { ...p, [campo]: valor } : p))
        );
    };

    const atualizarAlternativa = (idPergunta, indexAlt, valor) => {
        setPerguntas(prev =>
            prev.map(p =>
                p.id === idPergunta
                    ? {
                        ...p,
                        alternativas: p.alternativas.map((alt, i) =>
                            i === indexAlt ? valor : alt
                        )
                    }
                    : p
            )
        );
    };

    const setCorreta = (idPergunta, indexAlt) => {
        setPerguntas(prev =>
            prev.map(p => (p.id === idPergunta ? { ...p, correta: indexAlt } : p))
        );
    };


    const handleSalvar = () => {
        const atualizado = {
            ...quiz,
            titulo,
            perguntas
        };
        console.log('📤 Quiz salvo no modal:', atualizado);
        onSave(atualizado);
        onClose();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Editar Quiz</h2>

                <input
                    className={styles.titulo}
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />

                <div className={styles.scrollArea}>
                    {perguntas.map((p, idx) => (
                        <div key={p.id} className={styles.questionCard}>
                            <h3>Pergunta {idx + 1}</h3>

                            <input
                                className={styles.inputPergunta}
                                type="text"
                                placeholder="Enunciado da pergunta"
                                value={p.texto}
                                onChange={(e) => atualizarPergunta(p.id, 'texto', e.target.value)}
                            />

                            <div className={styles.options}>
                                {p.alternativas.map((alt, i) => (
                                    <div key={i} className={styles.option}>
                                        <input
                                            type="radio"
                                            name={`correta-${p.id}`}
                                            checked={p.correta === i}
                                            onChange={() => setCorreta(p.id, i)}
                                        />
                                        <input
                                            type="text"
                                            value={alt}
                                            onChange={(e) => atualizarAlternativa(p.id, i, e.target.value)}
                                            placeholder={`Alternativa ${String.fromCharCode(65 + i)}`}
                                        />
                                    </div>
                                ))}
                            </div>

                            <textarea
                                className={styles.explicacao}
                                placeholder="Explicação da resposta correta (opcional)"
                                value={p.explicacao}
                                onChange={(e) => atualizarPergunta(p.id, 'explicacao', e.target.value)}
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.actions}>
                    <button className={styles.cancelar} onClick={onClose}>Cancelar</button>
                    <button className={styles.salvar} onClick={handleSalvar}>Salvar</button>
                </div>
            </div>
        </div>
    );
}
