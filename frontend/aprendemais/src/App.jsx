import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Aluno/Login/Login';
import Home from './pages/Aluno/Home/Home';
import Cadastro from './pages/Aluno/Cadastro/Cadastro'
import Quizzes from './pages/Aluno/Quizzes/Quizzes'
import ResolverQuiz from './pages/Aluno/ResolverQuiz/ResolverQuiz'
import Ranking from './pages/Aluno/Ranking/Ranking';

import HomeProfessor from './pages/Professor/HomeProfessor/HomeProfessor';
import DisciplinasTurma from './pages/Professor/DisciplinasTurma/DisciplinasTurma';
import QuizzesDisciplina from './pages/Professor/QuizzesDisciplina/QuizzesDisciplina';

// dentro do <Routes>:


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/disciplinas/:id/quizzes" element={<Quizzes />} />
        <Route path="/quizzes/:id/resolver" element={<ResolverQuiz />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/homeProfessor" element={<HomeProfessor />} />
        <Route path="/turmas/:id/DisciplinasTurma" element={<DisciplinasTurma />} />  
        <Route path="/turmas/:id/DisciplinasTurma/quizzesDisciplina" element={<QuizzesDisciplina />} />
        </Routes>
    </Router>
  );
}




export default App;
