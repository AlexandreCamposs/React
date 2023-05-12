const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h2>{nome}</h2>
      <p>Iddade: {idade}</p>
      <p>Profissão: {profissao}</p>
      {idade >= 18 ? (
        <p>Pode tirar carteira de habilitaão</p>
      ) : (
        <p>Menor de idade</p>
      )}
    </div>
  );
};

export default UserDetails;
