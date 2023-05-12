import './App.css';
import Details from './components/Details';

function App() {
  const carros = [
    { id: 1, marca: 'Volvo', cor: 'Preto', ano: 2021, km: 12565 },
    { id: 2, marca: 'Mercedez', cor: 'vermelho', ano: 2023, km: 0 },
    { id: 3, marca: 'Ferrari', cor: 'amarelo', ano: 2000, km: 12536 },
  ];

  return (
    <div className="App">
      <h1>Carros</h1>
      <div className="card_container">
        {carros.map((x) => (
          <Details key={x.id} car={x} />
        ))}
      </div>
    </div>
  );
}

export default App;
