import styles from './Details.module.css';

const Details = ({ car }) => {
  return (
    <div className={styles.card}>
      <h1>Marca: {car.marca}</h1>
      <p>Cor: {car.cor}</p>
      <p>Ano: {car.ano}</p>
    </div>
  );
};

export default Details;
