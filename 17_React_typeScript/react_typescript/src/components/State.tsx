// 6 - useState
import react, { useState, ChangeEvent } from 'react';

const State = () => {
  const [text, setText] = useState<string | null>(null);

  // e controla o evento valor que está vindo do input
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>O texto é : {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;
