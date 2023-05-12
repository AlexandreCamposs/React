//prop children
const Container = ({ children, myValue, myValue2 }) => {
  return (
    <div>
      <h1>Conteúdo</h1>
      {children}
      <p>O valor é : {myValue}</p>
      <p>O valor é : {myValue2}</p>
    </div>
  );
};

export default Container;
