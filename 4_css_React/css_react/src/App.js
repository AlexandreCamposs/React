import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import { useState } from 'react';

function App() {
  const x = 10;
  const [nome] = useState('Alexandre');

  const redTitle = true;

  return (
    <div className="App">
      {/* css global */}
      <h1>React com css</h1>
      {/*css de componente */}
      <MyComponent />
      <h2>Este é o parágrafo do app.js</h2>
      {/* inline css */}
      <p style={{ color: 'red', padding: '25px', backgroundColor: 'black' }}>
        Este elemento foi estilizado de forma inline
      </p>
      <p style={{ color: 'blue', padding: '25px', backgroundColor: 'pink' }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/*  css inline dinamico */}
      <p
        style={
          x > 10
            ? { color: 'red', background: 'green', padding: '1rem' }
            : { color: 'pink', background: 'black', padding: '1rem' }
        }
      >
        CSS dinâmico
      </p>
      <h3
        style={
          nome === 'Alexandre'
            ? { color: 'red', background: 'blue', padding: '1rem' }
            : null
        }
      >
        Teste do nome
      </h3>
      {/*  clasee dinâmica */}
      <h3 className={redTitle ? 'red-title' : 'title'}>
        Este título vai ter classe dinâmica.
      </h3>
      {/*  css modules */}
      <Title />
    </div>
  );
}

export default App;
