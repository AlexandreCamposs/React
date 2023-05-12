const Challenge = () =>{
  const number1 = 10;
  const number2 = 15;

  const handleSum = () =>{
    // return <h1>A soma dos valores foi {number1+ number2}</h1>
    console.log("A soma dos valores foi: ",number1+number2 );
  }

  return (
    <div>
      <h1>
        Clique no botão abaixo para saber a soma do número {number1} e o número
        {number2}
      </h1>
      <button onClick={handleSum}>Soma</button>
    </div>
  );
}

export default Challenge;