import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import { FaCheckCircle, FaTimesCircle, FaRegCircle } from 'react-icons/fa';
import styles from './ResolverQuiz.module.css';
import { getQuiz } from '../../../services/quizService';

export default function ResolverQuiz() {
  const { id } = useParams();
  const quizId = parseInt(id);
  const [quiz, setQuiz] = useState(null);
  const [respostas, setRespostas] = useState({});
  const [enviado, setEnviado] = useState(false);
  const [notaFinal, setNotaFinal] = useState(0);
  const [quizFeito, setQuizFeito] = useState(false);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await getQuiz(quizId);
        setQuiz(data);

        // Verifica se o quiz já foi feito (simulação via localStorage)
        const feito = localStorage.getItem(`quizFeito_${quizId}`) === 'true';
        setQuizFeito(feito);
      } catch (error) {
        console.error('Erro ao buscar o quiz:', error);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleSelecionar = (idPerg, alternativaIndex) => {
    if (!enviado && !quizFeito) {
      setRespostas({ ...respostas, [idPerg]: alternativaIndex });
    }
  };

  const calcularNota = () => {
  if (!quiz?.pergunta) return 0;

  return quiz.pergunta.reduce((acc, pergunta) => {
    const alternativaEscolhida = respostas[pergunta.idPerg];
    const indiceCorreta = pergunta.alternativas.findIndex(a => a.correto === true);

    if (alternativaEscolhida === indiceCorreta) {
      // soma os pontos da pergunta (decimal)
      return acc + Number(pergunta.pontos);
    }
    return acc;
  }, 0);
};


  const enviarQuiz = () => {
    // Calcula nota somando pontos das perguntas acertadas
    if (!quiz?.pergunta) return;

    let totalPontos = 0;

    quiz.pergunta.forEach((pergunta) => {
      const alternativaEscolhida = respostas[pergunta.idPerg];
      const indiceCorreta = pergunta.alternativas.findIndex((a) => a.correto === true);

      if (alternativaEscolhida === indiceCorreta) {
        totalPontos += Number(pergunta.pontos); // usa pontos da pergunta
      }
    });

    setNotaFinal(totalPontos);
    setEnviado(true);
    setQuizFeito(true);
    localStorage.setItem(`quizFeito_${quizId}`, 'true'); // bloqueia quiz para próxima tentativa
  };

  if (!quiz) {
    return (
      <div className={styles.page}>
        <Sidebar />
        <div className={styles.mainContent}>
          <TopBar />
          <div className={styles.quizContainer}>
            <h2>Carregando quiz...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (quizFeito && !enviado) {
    // Se quiz já foi feito, mas página recarregada sem estado enviado (ex: reload)
    return (
      <div className={styles.page}>
        <Sidebar />
        <div className={styles.mainContent}>
          <TopBar />
          <div className={styles.quizContainer}>
            <h2>Você já realizou este quiz.</h2>
            <p>Não é possível realizá-lo novamente.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Sidebar />
      <div className={styles.mainContent}>
        <TopBar />
        <div className={styles.quizContainer}>
          <div className={styles.header}>
            <h2>{quiz.titulo}</h2>
          </div>

          {enviado && (
            <div className={styles.resultadoTop}>
              <h3>
                Você fez {notaFinal} pontos de {quiz.pergunta.reduce((acc, p) => acc + Number(p.pontos), 0)} pontos possíveis.
              </h3>
              <p>Veja abaixo as explicações das questões para revisar seu aprendizado.</p>
            </div>
          )}

          {quiz.pergunta.map((pergunta, idx) => (
            <div key={pergunta.idPerg} className={styles.questionCard}>
              <h3>Questão {idx + 1}</h3>
              <p className={styles.enunciado}>{pergunta.enunciado}</p>
              <div className={styles.options}>
                {pergunta.alternativas.map((alt, i) => {
                  const selecionada = respostas[pergunta.idPerg] === i;
                  const indiceCorreta = pergunta.alternativas.findIndex((a) => a.correto === true);
                  const correta = i === indiceCorreta;
                  const mostrarResultado = enviado;
                  let classe = styles.option;

                  if (mostrarResultado) {
                    if (selecionada && correta) classe += ` ${styles.certo}`;
                    else if (selecionada && !correta) classe += ` ${styles.errado}`;
                    else if (!selecionada && correta) classe += ` ${styles.certo}`; // mostra correta se não selecionada
                  } else if (selecionada) {
                    classe += ` ${styles.selected}`;
                  }

                  return (
                    <div
                      key={i}
                      className={classe}
                      onClick={() => handleSelecionar(pergunta.idPerg, i)}
                      style={{ cursor: enviado || quizFeito ? 'default' : 'pointer' }}
                    >
                      <span className={styles.letter}>{String.fromCharCode(65 + i)}</span>
                      <span className={styles.altText}>{alt.descricao}</span>
                      <div className={styles.altIcon}>
                        {selecionada ? (
                          <FaCheckCircle
                            color={mostrarResultado ? (correta ? '#31b842' : '#e53e3e') : '#4cb9e7'}
                          />
                        ) : (
                          <FaRegCircle color="#ccc" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              {enviado && pergunta.explicacao && (
                <div className={styles.explicacao}>
                  <strong>Explicação:</strong> {pergunta.explicacao}
                </div>
              )}
            </div>
          ))}

          {!enviado && !quizFeito && (
            <div className={styles.footer}>
              <button className={styles.submitButton} onClick={enviarQuiz}>
                Enviar Quiz
              </button>
            </div>
          )}
          {quizFeito && !enviado && (
            <p>Você já realizou este quiz e não pode refazer.</p>
          )}
        </div>
      </div>
    </div>
  );
}
