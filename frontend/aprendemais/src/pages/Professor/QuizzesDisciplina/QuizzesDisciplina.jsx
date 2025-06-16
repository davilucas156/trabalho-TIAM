import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
