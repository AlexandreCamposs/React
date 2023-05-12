const Events = () =>{

  const handleMyEvent = (e) =>{
    console.log(e)
    console.log("Ativou o evento")
  }

  const renderSomething = (x) =>{
    if(x){
      return <h1>Renderizando isso!</h1>
    }else{
      return <h1> Também posso renderizar isso!</h1>;
    }
  }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique em mim!</button>

        <button onClick={() => console.log('Clicou no botão')}>
          Clique em mim!
        </button>

        <button
          onClick={() => {
            if (true) {
              console.log('Não deveria estar aqui!');
            }
          }}
        >
          Clique aqui!
        </button>
      </div>
      <div>{renderSomething(true)}</div>
      <div>{renderSomething(false)}</div>
    </div>
  );
}

export default Events