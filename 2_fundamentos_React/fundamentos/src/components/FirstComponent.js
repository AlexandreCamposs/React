//importaçoes
import MyComponent from "./MyComponent";

const FirstComponent = () =>{
//comentário.
  return(
    <div>
      {/*comentário */}
      <h1>Primeiro componente</h1>
      <p className="teste">Testando propriedade.</p>
      <MyComponent/>
      </div>
  )
}

export default FirstComponent;