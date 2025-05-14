import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Aluno/Login/Login';
import Home from './pages/Aluno/Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
