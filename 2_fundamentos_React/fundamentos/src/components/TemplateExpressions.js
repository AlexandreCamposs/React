const TemplateExpressions = () =>{
  const name = "Alexandre";
  const data = {
    age:30,
    job:"Programmer"};
  
  return (
    <div>
      <h1>Olá {name}.</h1>
      <p>
        Idade: {data.age} profissão {data.job}
      </p>
    </div>
  );
}

export default TemplateExpressions;