import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Products = () => {
  const { counter } = useContext(CounterContext);
  //  5 - context mais complexo
  const { color } = useTitleColorContext();
  return (
    <div>
      <h1 style={{ color: color }}>Produtos</h1>
      <p>Valor contador: {counter}</p>
      {/* 3 - alterando o valor */}
    </div>
  );
};

export default Products;
