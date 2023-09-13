import { useContext } from 'react';
import { QuizzContext } from '../context/quiz';

import React from 'react';
import Quiz from '../img/quiz.svg';

import './welcome.css';

const Welcome = () => {
  //quizState pega os valores e dispatch altera os valores [] para desestruturar
  const [quizState, dispatch] = useContext(QuizzContext);

  // console.log(quizState);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: 'CHANGE_STATE' })}>
        Iniciar
      </button>
      <img src={Quiz} alt="" />
    </div>
  );
};

export default Welcome;
