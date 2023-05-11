import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: 'Alexandre',
          email: 'ale@gmail.com',
          role: 'Sou advogado',
        }}
      />
    </div>
  );
}

export default App;
