import { useState } from 'react';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import styles from './CriarQuiz.module.css';

export default function CriarQuiz() {
  const [titulo, setTitulo] = useState('');
  const [perguntas, setPerguntas] = useState([]);

  const adicionarPergunta = () => {
    setPerguntas([
      ...perguntas,
      {
        id: Date.now(),
        texto: '',
        alternativas: ['', '', '', ''],
        correta: null,
        explicacao: '',
      },
    ]);
  };

  const atualizarPergunta = (id, campo, valor) => {
    setPerguntas((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [campo]: valor } : p))
    );
  };

  const atualizarAlternativa = (idPergunta, indexAlt, valor) => {
    setPerguntas((prev) =>
      prev.map((p) =>
        p.id === idPergunta
          ? {
              ...p,
              alternativas: p.alternativas.map((alt, i) =>
                i === indexAlt ? valor : alt
              ),
            }
          : p
      )
    );
  };

  const setCorreta = (idPergunta, indexAlt) => {
    setPerguntas((prev) =>
      prev.map((p) => (p.id === idPergunta ? { ...p, correta: indexAlt } : p))
    );
  };

  const salvarQuiz = () => {
    const novoQuiz = {
      titulo,
      perguntas,
    };
    console.log('✅ Quiz criado:', novoQuiz);
    alert('Quiz salvo com sucesso!');
  };

  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.container}>
          <h2 className={styles.header}>Criar Novo Quiz</h2>
          <input
            className={styles.titulo}
            type="text"
            placeholder="Título do Quiz"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          {perguntas.map((p, idx) => (
            <div key={p.id} className={styles.card}>
              <h3>Pergunta {idx + 1}</h3>
              <input
                type="text"
                placeholder="Digite o enunciado da pergunta"
                value={p.texto}
                onChange={(e) => atualizarPergunta(p.id, 'texto', e.target.value)}
                className={styles.inputPergunta}
              />
              <div className={styles.alternativas}>
                {p.alternativas.map((alt, i) => (
                  <div key={i} className={styles.altRow}>
                    <input
                      type="radio"
                      name={`correta-${p.id}`}
                      checked={p.correta === i}
                      onChange={() => setCorreta(p.id, i)}
                    />
                    <input
                      type="text"
                      placeholder={`Alternativa ${String.fromCharCode(65 + i)}`}
                      value={alt}
                      onChange={(e) => atualizarAlternativa(p.id, i, e.target.value)}
                      className={styles.inputAlt}
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

          <div className={styles.botoes}>
            <button className={styles.addBtn} onClick={adicionarPergunta}>
              + Adicionar Pergunta
            </button>
            <button className={styles.saveBtn} onClick={salvarQuiz}>
              Salvar Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
