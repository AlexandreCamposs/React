import { useContext } from 'react';
import { QuizzContext } from '../context/quiz';

import WellDone from '../img/welldone.svg';
import './GameOver.css';

const GamerOver = () => {
  const [quizState, dispatch] = useContext(QuizzContext);

  return (
    <div id="gameover">
      <h2>Fim de jogo</h2>
      <p>Pontuação: {quizState.score}</p>
      <p>
        Você acertou {quizState.score} de {quizState.questions.length}{' '}
        perguntas.
      </p>
      <img src={WellDone} alt="WellDone" />
      <button onClick={() => dispatch({ type: 'NEW_GAME' })}>Reiniciar</button>
    </div>
  );
};

export default GamerOver;
