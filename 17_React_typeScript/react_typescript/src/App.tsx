import React, { createContext } from 'react';

// 4 - Importação de components
import FirstComponents from './components/FirstComponents';

// 5- Desestruturando props
import SecondComponent from './components/SecondComponent';
import Destructuring, { Category } from './components/Destructuring';

// 6 - useState
import State from './components/State';

import Context from './components/Context';

// 8 type
type textOrNull = string | null;
type fixed = 'isso' | 'ou' | 'aquilo';

// 9 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1- Variáveis
  const name: string = 'Alexandre';
  const age: number = 30;
  const isWorking: boolean = false;

  // 2-Funções neste exemplo em ( ) está tipando o tipo de dado que vai receber e após  : tipando o retorno
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };

  // 8 - type
  const myText: textOrNull = 'Tem algum texto aqui';
  let mySecondText: textOrNull = null;

  // mySecondText = 'Opa';

  const testandoFixed: fixed = 'ou';

  //9- context
  const contextValue: IAppContext = {
    language: 'JS',
    framework: 'Express',
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {' '}
      <div className="App">
        {/*  1- Variáveis */}
        <h2>React com typeScript</h2>
        <h2>Nome: {name}</h2>
        <h2>idade: {age}</h2>
        {isWorking && <p>Está trabalhando</p>}
        {/*  2-Funções */}
        <h3>{userGreeting(name)}</h3>
        <FirstComponents />
        <SecondComponent name="segundo" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={['ts', 'js']}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post"
          content="Algum conteúdo"
          commentsQty={5}
          tags={['python']}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
