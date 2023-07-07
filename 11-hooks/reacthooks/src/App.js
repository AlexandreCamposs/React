import './App.css';

import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { HookeUseContext } from './components/HookUseContext';
// pages

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <HookeUseContext>
        <h1>React Hooks</h1>
        <BrowserRouter>
          {/* {ul barra de navegação} */}
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          {/* {Routas de  Roteameto} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </HookeUseContext>
    </div>
  );
}

export default App;
