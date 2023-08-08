import './App.css';

//Router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//Hooks
import { useAuth } from './hooks/useAuth';

//Pages
import Register from './pages/Auth/Register';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import EditProfile from './pages/EditProfile/EditProfile';

function App() {
  const { auth, loading } = useAuth();
  // console.log(loading);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={auth ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/profile"
              element={auth ? <EditProfile /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!auth ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!auth ? <Register /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;