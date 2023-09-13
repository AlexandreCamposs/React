import { useContext } from 'react';
import { QuizzContext } from '../context/quiz';

import './questions.css';
import Option from './Option';

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizzContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  // console.log(quizState);
  console.log(currentQuestion);

  const onSelectOption = (option) => {
    console.log(option);
    dispatch({
      type: 'CHECK_ANSWER',
      payload: { answer: currentQuestion.answer, option },
    });
  };
  return (
    <div id="question">
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id="options-container">
        <p>
          {currentQuestion.options.map((option) => (
            <Option
              option={option}
              key={option}
              answer={currentQuestion.answer}
              selectOption={() => onSelectOption(option)}
            />
          ))}
        </p>
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}>
          Contiuar
        </button>
      )}
    </div>
  );
};

export default Questions;
