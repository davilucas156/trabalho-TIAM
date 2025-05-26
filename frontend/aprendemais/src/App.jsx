import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Aluno/Login/Login';
import Home from './pages/Aluno/Home/Home';
import Cadastro from './pages/Aluno/Cadastro/Cadastro'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
