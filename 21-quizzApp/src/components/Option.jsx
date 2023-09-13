import { useContext } from 'react';

import { QuizzContext } from '../context/quiz';

import './Option.css';

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizzContext);
  return (
    <div
      className={`option ${
        quizState.answerSelected && option === answer ? 'correct' : ''
      }${quizState.answerSelected && option !== answer ? 'wrong' : ''}`}
      onClick={() => selectOption(option)}
    >
      {option}
    </div>
  );
};

export default Option;
