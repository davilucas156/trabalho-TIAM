import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< Updated upstream
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import { getQuizzesByDisciplina, createQuiz } from '../../../services/quizService';
import styles from './QuizzesDisciplina.module.css';
import { useLocation } from 'react-router-dom';



export default function QuizzesDisciplina() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const idDisciplina = queryParams.get('idDisciplina');
  const [quizzes, setQuizzes] = useState([]);


  const fetchQuizzes = async () => {
    try {
      const data = await getQuizzesByDisciplina(idDisciplina);
      setQuizzes(data);
    } catch (error) {
      console.error('Erro ao buscar quizzes:', error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, [idDisciplina]);

  const handleCriarQuiz = async () => {
    const titulo = prompt('Digite o título do novo quiz:');
    if (!titulo) return;

    const enunciado = prompt('Digite o enunciado da pergunta:');
    if (!enunciado) return;

    const img = prompt('Informe o link da imagem (ou deixe em branco):') || '';
    const pontos = parseInt(prompt('Quantos pontos essa pergunta vale?')) || 0;
    const tipo = prompt('Tipo da pergunta (ex: múltipla escolha):') || 'múltipla escolha';

    const alternativas = [];
    const numAlternativas = parseInt(prompt('Quantas alternativas?')) || 0;

    for (let i = 0; i < numAlternativas; i++) {
      const descricao = prompt(`Descrição da alternativa ${i + 1}:`);
      const correto = confirm(`A alternativa ${i + 1} está correta?`);
      alternativas.push({ descricao, correto });
    }

    const novaPergunta = {
      enunciado,
      img,
      pontos,
      tipo,
      alternativas
    };

    const novoQuiz = {
      id_Disciplina: parseInt(idDisciplina),
      id_criador: 1, // Troque para ID real do usuário logado
      titulo,
      data_criacao: new Date().toISOString(),
      perguntas: [novaPergunta]
    };

    try {
      await createQuiz(novoQuiz);
      alert('Quiz criado com sucesso!');
      setShowModal(false);
      fetchQuizzes();
    } catch (error) {
      console.error('Erro ao criar quiz:', error.response?.data || error.message || error);
      alert(`Erro ao criar quiz: ${error.response?.data?.message || 'Ver console'}`);
    }

  };
  const [showModal, setShowModal] = useState(false);
  const [titulo, setTitulo] = useState('');
  const [enunciado, setEnunciado] = useState('');
  const [img, setImg] = useState('');
  const [pontos, setPontos] = useState(0);
  const [tipo, setTipo] = useState('múltipla escolha');
  const [alternativas, setAlternativas] = useState([{ descricao: '', correto: false }]);

  const addAlternativa = () => {
    setAlternativas([...alternativas, { descricao: '', correto: false }]);
  };

  const updateAlternativa = (index, field, value) => {
    const novas = [...alternativas];
    novas[index][field] = field === 'correto' ? value.target.checked : value.target.value;
    setAlternativas(novas);
  };

  const handleSalvarQuiz = async () => {
    const novaPergunta = { enunciado, img, pontos, tipo, alternativas };
    const novoQuiz = {
      id_Disciplina: parseInt(idDisciplina),
      id_criador: 1,
      titulo,
      DatCriacao: new Date().toISOString(),
      perguntas: [novaPergunta]
    };

    try {
      console.log('Enviando quiz:', JSON.stringify(novoQuiz, null, 2));
      await createQuiz(novoQuiz);

      alert('Quiz criado com sucesso!');
      setShowModal(false);
      setTitulo('');
      setEnunciado('');
      setImg('');
      setPontos(0);
      setTipo('múltipla escolha');
      setAlternativas([{ descricao: '', correto: false }]);
      fetchQuizzes();
    } catch (error) {
      console.error('Erro ao criar quiz:', error);
      alert('Erro ao criar quiz.');
    }
  };

  const [quizEditando, setQuizEditando] = useState(null);


  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.page1}>
          <h2 className={styles.title}>Quizzes da Disciplina #{idDisciplina}</h2>
          <button className={styles.botaoCriar} onClick={() => setShowModal(true)}>
            ➕ Criar Quiz
          </button>


          {quizzes.length === 0 ? (
            <p>Nenhum quiz criado ainda.</p>
          ) : (
            <ul className={styles.quizList}>
              {quizzes.map((quiz) => (
                <li key={quiz.idQuizzes} className={styles.quizItem}>
                  <h4>{quiz.titulo}</h4>
                  <div className="meta">
                    Pontuação: {quiz.perguntas?.[0]?.pontos || 0} pontos <br />
                    Criado em: {new Date(quiz.datCriacao).toLocaleDateString()}
                  </div>
                  <button onClick={() => {
                    setTitulo(quiz.titulo);
                    setEnunciado(quiz.perguntas?.[0]?.enunciado || '');
                    setImg(quiz.perguntas?.[0]?.img || '');
                    setPontos(quiz.perguntas?.[0]?.pontos || 0);
                    setTipo(quiz.perguntas?.[0]?.tipo || 'múltipla escolha');
                    setAlternativas(quiz.perguntas?.[0]?.alternativas || [{ descricao: '', correto: false }]);
                    setQuizEditando(quiz);
                    setShowModal(true);
                  }}>
                    ✏️ Editar
                  </button>

                </li>
              ))}
            </ul>


          )}
          {showModal && (
            <div className={styles.modalOverlay}>
              <div className={styles.modalContent}>
                <h3>Criar Novo Quiz</h3>

                <label>Título:</label>
                <input value={titulo} onChange={(e) => setTitulo(e.target.value)} />

                <label>Enunciado da pergunta:</label>
                <input value={enunciado} onChange={(e) => setEnunciado(e.target.value)} />

                <label>Imagem (URL):</label>
                <input value={img} onChange={(e) => setImg(e.target.value)} />

                <input
                  type="number"
                  value={pontos}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setPontos(isNaN(val) ? 0 : val);
                  }}
                />

                <label>Tipo:</label>
                <input value={tipo} onChange={(e) => setTipo(e.target.value)} />

                <h4>Alternativas:</h4>
                {alternativas.map((alt, index) => (
                  <div key={index}>
                    <input
                      placeholder={`Alternativa ${index + 1}`}
                      value={alt.descricao}
                      onChange={(e) => updateAlternativa(index, 'descricao', e)}
                    />
                    <label>
                      Correta? <input type="checkbox" checked={alt.correto} onChange={(e) => updateAlternativa(index, 'correto', e)} />
                    </label>
                  </div>
                ))}

                <button onClick={addAlternativa}>Adicionar Alternativa</button>
                <br /><br />
                <button onClick={handleSalvarQuiz}>Salvar Quiz</button>
                <button onClick={() => setShowModal(false)}>Cancelar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}
=======
import { createQuiz } from '../../../services/quizService';
import api from '../../../services/api';
import styles from './QuizzesDisciplina.module.css';

const QuizzesDisciplina = () => {
  const { idDisciplina } = useParams();
  const [quizzes, setQuizzes] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [newQuizTitle, setNewQuizTitle] = useState('');
  const [perguntas, setPerguntas] = useState([]);

  useEffect(() => {
    api.get('/Quizs')
      .then(res => {
        const filtrados = res.data.filter(q => q.id_Disciplina === Number(idDisciplina));
        setQuizzes(filtrados);
      })
      .catch(err => console.error('Erro ao buscar quizzes:', err));
  }, [idDisciplina]);

  const addPergunta = () => {
    setPerguntas(prev => [...prev, {
      enunciado: '',
      pontos: 0,
      tipo: '',
      alternativas: [{ descricao: '', correto: false }]
    }]);
  };

  const handleChangePergunta = (i, field, val) => {
    const novas = [...perguntas];
    novas[i][field] = field === 'pontos' ? Number(val) : val;
    setPerguntas(novas);
  };

  const handleChangeAlternativa = (pi, ai, field, val) => {
    const novas = [...perguntas];
    novas[pi].alternativas[ai][field] = field === 'correto' ? val === 'true' : val;
    setPerguntas(novas);
  };

  const addAlternativa = (pi) => {
    const novas = [...perguntas];
    novas[pi].alternativas.push({ descricao: '', correto: false });
    setPerguntas(novas);
  };

  const handleCreateQuiz = async () => {
    const novoQuiz = {
      titulo: newQuizTitle,
      data_criacao: new Date(),
      id_criador: 1,
      id_Disciplina: Number(idDisciplina),
      perguntas
    };

    try {
      const res = await createQuiz(novoQuiz);
      setQuizzes(prev => [...prev, res.data]);
      setShowPopup(false);
      setNewQuizTitle('');
      setPerguntas([]);
    } catch (err) {
      alert('Erro ao criar quiz');
      console.error(err);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Quizzes da Disciplina {idDisciplina}</h2>
      <button onClick={() => setShowPopup(true)}>Novo Quiz</button>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <h3>Novo Quiz</h3>
            <input
              type="text"
              placeholder="Título"
              value={newQuizTitle}
              onChange={e => setNewQuizTitle(e.target.value)}
            />
            <button onClick={addPergunta}>+ Pergunta</button>

            {perguntas.map((p, i) => (
              <div key={i}>
                <input placeholder="Enunciado" value={p.enunciado} onChange={e => handleChangePergunta(i, 'enunciado', e.target.value)} />
                <input type="number" placeholder="Pontos" value={p.pontos} onChange={e => handleChangePergunta(i, 'pontos', e.target.value)} />
                <input placeholder="Tipo" value={p.tipo} onChange={e => handleChangePergunta(i, 'tipo', e.target.value)} />

                {p.alternativas.map((a, ai) => (
                  <div key={ai}>
                    <input placeholder="Alternativa" value={a.descricao} onChange={e => handleChangeAlternativa(i, ai, 'descricao', e.target.value)} />
                    <select value={a.correto.toString()} onChange={e => handleChangeAlternativa(i, ai, 'correto', e.target.value)}>
                      <option value="false">Errado</option>
                      <option value="true">Correto</option>
                    </select>
                  </div>
                ))}
                <button onClick={() => addAlternativa(i)}>+ Alternativa</button>
              </div>
            ))}

            <button onClick={handleCreateQuiz}>Salvar</button>
            <button onClick={() => setShowPopup(false)}>Cancelar</button>
          </div>
        </div>
      )}

      <ul>
        {quizzes.map((q) => (
          <li key={q.id}>{q.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuizzesDisciplina;
>>>>>>> Stashed changes
