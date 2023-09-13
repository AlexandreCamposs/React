//react,components,estáticos

import { useContext, useEffect } from 'react';
import { QuizzContext } from './context/quiz';

import Welcome from './components/Welcome';
import Questions from './components/Questions';
import GamerOver from './components/GameOver';

import './App.css';

function App() {
  const [quizState, dispatch] = useContext(QuizzContext);
  // console.log(quizState);

  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' });
  }, []);

  return (
    <div className="app">
      <h1>Quizz sobre programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Questions />}
      {quizState.gameStage === 'End' && <GamerOver />}
    </div>
  );
}

export default App;
