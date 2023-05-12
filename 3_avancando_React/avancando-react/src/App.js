import { useState } from 'react';
import './App.css';
import Falcao from './assets/falcao.jpg';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  const name = 'Alex';
  const [userName] = useState('Pedro');
  const car = [
    { id: 1, marca: 'Ferrari', cor: 'Azul', newCar: true, km: 0 },
    { id: 2, marca: 'Mercedes', cor: 'Preto', newCar: true, km: 0 },
    { id: 3, marca: 'Gol', cor: 'Azul', newCar: false, km: 10250 },
  ];

  function showMessage() {
    console.log('Clicou');
  }

  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const pessoas = [
    { nome: 'Alexandre', idade: 30, profissão: 'Programador' },
    { nome: 'Rafael', idade: 34, profissão: 'design' },
    { nome: 'Carlos', idade: 19, profissão: 'Padeiro' },
    { nome: 'Joaquim', idade: 17, profissão: 'Estudante' },
  ];

  return (
    <div className="App">
      <h1>Avançando em react</h1>
      {/*Imagem em public */}
      <img src="/suricate.jpg" alt="surucate" />
      {/*imagem em assets */}
      <img src={Falcao} alt="falcao" />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name="Ale" />
      <ShowUserName name={name} />
      <ShowUserName name={userName} />
      {/*destructuring */}
      <CarDetails marca="Gol" km={1000} cor="Preto" newCar={false} />
      {/*reaproveitando */}
      <CarDetails marca="Gol" km={0} cor="Preto" newCar={true} />
      <CarDetails marca="Gol" km={1000} cor="Preto" newCar={false} />
      {/*loop array de objetos */}
      {car.map((car, i) => (
        <CarDetails
          key={i}
          marca={car.marca}
          cor={car.cor}
          newCar={car.newCar}
          km={car.km}
        />
      ))}
      {/*fragment */}
      <Fragment propFragment="teste" />
      {/*children */}
      <Container myValue="10">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue2="falso">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="10" myValue2="falso">
        <p>E este é o conteúdo</p>
      </Container>
      {/*função com prop */}
      <ExecuteFunction myFuction={showMessage} />
      {/*state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {pessoas.map((pessoa, key) => (
        <UserDetails
          key={key}
          nome={pessoa.nome}
          idade={pessoa.idade}
          profissao={pessoa.profissão}
        />
      ))}
    </div>
  );
}

export default App;
