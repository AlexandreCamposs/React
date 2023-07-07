import { useState } from 'react';

const HookUseState = () => {
  // 1- useState
  let userName = 'Alexandre';

  const [name, setName] = useState('Matheus');

  const changeNames = () => {
    userName = 'Alexandre Campos';

    setName('Matheus Battista');
  };

  // 2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    // envio a uma API
    console.log(age);
  };

  return (
    <div>
      {/* {1- useState}*/}
      <h2>UseState</h2>
      <p>Váriavel:{userName}</p>
      <p>useState:{name}</p>
      <button onClick={changeNames}> Mudar nomes!</button>
      {/* 2 - useState e input */}
      <p>Digite sua idade</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      Você tem {age} anos
      <hr />
    </div>
  );
};

export default HookUseState;
