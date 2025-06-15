import React, { useState, useEffect } from 'react';
import { createQuiz } from '../../../services/quizService';
import { getDisciplinas } from '../../../services/disciplinaService';
import { getUsuarios } from '../../../services/usuarioService';
import styles from './CriarQuiz.module.css';


const CriarQuiz = () => {
  const [titulo, setTitulo] = useState('');
  const [perguntas, setPerguntas] = useState([]);

  const [disciplinas, setDisciplinas] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  const [idDisciplinaSelecionada, setIdDisciplinaSelecionada] = useState(null);
  const [idCriadorSelecionado, setIdCriadorSelecionado] = useState(null);

  useEffect(() => {
    // Buscar disciplinas e usuários quando o componente carregar
    getDisciplinas().then(setDisciplinas).catch(console.error);
    getUsuarios().then(setUsuarios).catch(console.error);
  }, []);

  const adicionarPergunta = () => {
    setPerguntas(prevPerguntas => [
      ...prevPerguntas,
      {
        enunciado: '',
        img: '',
        pontos: 1,
        tipo: 'multiplaEscolha',
        alternativas: ['', '', '', ''],
        correta: 0,
      },
    ]);
  };

  const salvarQuiz = async () => {
    if (!idDisciplinaSelecionada || !idCriadorSelecionado) {
      alert('Por favor, selecione uma disciplina e um criador válidos.');
      return;
    }

    const dataAtual = new Date().toISOString();

    const quizParaEnviar = {
      id_Disciplina: idDisciplinaSelecionada,
      id_criador: idCriadorSelecionado,
      titulo,
      data_criacao: dataAtual,
      perguntas: perguntas.map((p) => ({
        enunciado: p.enunciado,
        img: p.img || '',
        pontos: p.pontos || 1,
        tipo: p.tipo || 'multiplaEscolha',
        alternativas: p.alternativas.map((alt, index) => ({
          descricao: alt,
          correto: index === p.correta,
        })),
      })),
    };

    console.log('📤 Payload Enviado:', JSON.stringify(quizParaEnviar, null, 2));

    try {
      const response = await createQuiz(quizParaEnviar);
      console.log('✅ Quiz criado com sucesso:', response.data);
      alert('Quiz salvo com sucesso!');
      setTitulo('');
      setPerguntas([]);
      setIdDisciplinaSelecionada(null);
      setIdCriadorSelecionado(null);
    } catch (error) {
      console.error('❌ Erro ao salvar o quiz:', error);
      alert('Erro ao salvar o quiz. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.mainContent}>
        <div className={styles.container}>
          <h2 className={styles.header}>Criar Novo Quiz</h2>

          <select
            value={idDisciplinaSelecionada || ''}
            onChange={(e) => setIdDisciplinaSelecionada(parseInt(e.target.value))}
          >
            <option value="">Selecione uma Disciplina</option>
            {disciplinas.map((disc) => (
              <option key={disc.id} value={disc.id}>
                {disc.nome || disc.titulo || `Disciplina ${disc.id}`}
              </option>
            ))}
          </select>

          <select
            value={idCriadorSelecionado || ''}
            onChange={(e) => setIdCriadorSelecionado(parseInt(e.target.value))}
          >
            <option value="">Selecione o Criador</option>
            {usuarios.map((user) => (
              <option key={user.id} value={user.id}>
                {user.nome || user.username || `Usuário ${user.id}`}
              </option>
            ))}
          </select>

          <input
            className={styles.titulo}
            type="text"
            placeholder="Título do Quiz"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />

          {/* ... resto do seu formulário de perguntas ... */}

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
};

export default CriarQuiz;
