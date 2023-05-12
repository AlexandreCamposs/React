//destructuring props,reaproveitamento de componente

const CarDetails = ({ marca, km, cor, newCar }) => {
  return (
    <div>
      <h1>Detalhes do carro.</h1>
      <ul>
        <li>Marca: {marca}</li>
        <li>KM: {km}</li>
        <li>cor: {cor}</li>
      </ul>
      {newCar && <p>Este carro é novo!</p>}
      {!newCar && <p>Este carro é seminovo!</p>}
    </div>
  );
};

export default CarDetails;
