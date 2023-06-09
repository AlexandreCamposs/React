import './App.css';
// 1 - React router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//components
import NavBar from './components/NavBar';
import SearchForm from './components/SearchForm';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Info from './pages/Info';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 2- links com react router */}
        <NavBar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/* {4- rota dinamica} */}
          <Route path="/products/:id" element={<Products />} />
          {/* 9 - search */}
          <Route path="/search" element={<Search />} />
          {/* 10- redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* 7- no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
