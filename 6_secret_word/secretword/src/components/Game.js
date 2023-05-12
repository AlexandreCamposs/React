import './Game.css';

const Game = ({ veryfiLetter }) => {
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação:0</span>
      </p>
      <h1>Adivinhe a palavra</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>Dica..</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">a</span>
        <span className="blankSquare">b</span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras utilizadas</p>
        <span>a</span>
        <span>b</span>
      </div>

      <button onClick={veryfiLetter}>Finalizar jogo</button>
    </div>
  );
};

export default Game;
