import { useState } from 'react';
import { usePrevious } from '../hooks/usePrevious';

const HookCustom = () => {
  const [number, setNumber] = useState(0);
  const previosValue = usePrevious(number);

  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Atual: {number}</p>
      <p>Anterior: {previosValue}</p>
      <button onClick={() => setNumber(Math.random())}>Alterar valor</button>
      <hr />
    </div>
  );
};

export default HookCustom;
