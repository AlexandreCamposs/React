//renderização condicional
import { useState } from 'react';

const ConditionalRender = () => {
  const [x] = useState(true);
  // console.log(x);

  const [name, setName] = useState('Alexandre');

  return (
    <div>
      <div>
        {/*renderização condicional*/}
        <h1>Será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
      </div>
      <div>
        {/*if ternario */}
        {name === 'João' ? (
          <div>
            <p>Nome encontrado é João</p>
          </div>
        ) : (
          <div>
            <p>Nome não encontrado</p>
          </div>
        )}
        <button onClick={() => setName('João')}>Clique aqui!</button>
      </div>
    </div>
  );
};

export default ConditionalRender;
