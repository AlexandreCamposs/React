//usando useState 
import {useState} from 'react';

const ManageData = () => {
    let someData = 10;
    // console.log(someData)

    const [number, setNumber] = useState(15);
    // console.log(number);
  return (
  <div>
    <div>
      <h1>valor: {someData}</h1>
      <button onClick={()=> (someData = 15)}>Mudar variável</button>
    </div>
      <div>
      <h1>Valor : {number}</h1>
      <button onClick={()=> setNumber(25)}>Mudar valor</button>
      </div>
  </div>
  )
}
export default ManageData;
