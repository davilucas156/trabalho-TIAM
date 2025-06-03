import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import TopBar from '../../../components/TopBar/TopBar';
import { FaCheckCircle, FaTimesCircle, FaRegCircle } from 'react-icons/fa';
import styles from './ResolverQuiz.module.css';
import { quizzesMock } from '../../../mocks/mockQuizzes';


export default function ResolverQuiz() {
  const { id } = useParams();
  const quizId = parseInt(id);
  const quiz = quizzesMock.find(q => q.id === quizId);
  const [respostas, setRespostas] = useState({});
  const [enviado, setEnviado] = useState(false);

  if (!quiz) {
    return (
      <div className={styles.page}>
        <Sidebar />
        <div className={styles.mainContent}>
          <TopBar />
          <div className={styles.quizContainer}>
            <h2>Quiz não encontrado</h2>
          </div>
        </div>
      </div>
    );
  }
  const handleSelecionar = (perguntaId, alternativaIndex) => {
    setRespostas({ ...respostas, [perguntaId]: alternativaIndex });
  };

  const enviarQuiz = () => {
    setEnviado(true);
  };

  const calcularAcertos = () =>
    quiz.perguntas.reduce((acc, p) => {
      return respostas[p.id] === p.correta ? acc + 1 : acc;
    }, 0);

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
              <h3>Você acertou {calcularAcertos()} de {quiz.perguntas.length} questões.</h3>
              <p>Veja abaixo as explicações das questões para revisar seu aprendizado.</p>
            </div>
          )}


          {quiz.perguntas.map((pergunta, idx) => (
            <div key={pergunta.id} className={styles.questionCard}>
              <h3>Questão {idx + 1}</h3>
              <p className={styles.enunciado}>{pergunta.texto}</p>
              <div className={styles.options}>
                {pergunta.alternativas.map((alt, i) => {
                  const selecionada = respostas[pergunta.id] === i;
                  const correta = pergunta.correta === i;
                  const mostrarResultado = enviado;
                  let classe = styles.option;
                  if (mostrarResultado) {
                    if (selecionada && correta) classe += ` ${styles.certo}`;
                    else if (selecionada && !correta) classe += ` ${styles.errado}`;
                  } else if (selecionada) {
                    classe += ` ${styles.selected}`;
                  }

                  return (
                    <div
                      key={i}
                      className={classe}
                      onClick={() => !enviado && handleSelecionar(pergunta.id, i)}
                    >
                      <span className={styles.letter}>{String.fromCharCode(65 + i)}</span>
                      <span className={styles.altText}>{alt}</span>
                      <div className={styles.altIcon}>
                        {selecionada ? (
                          <FaCheckCircle color={mostrarResultado ? (correta ? '#31b842' : '#e53e3e') : '#4cb9e7'} />
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

          {/* Botão de envio */}
          {!enviado && (
            <div className={styles.footer}>
              <button className={styles.submitButton} onClick={enviarQuiz}>
                Enviar Quiz
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
