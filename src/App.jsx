import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Medicamentos from './pages/Medicamentos';
import Saude from './pages/Saude';
import Familiares from './pages/Familiares';
import Notificacoes from './pages/Notificacoes';
import Configuracoes from './pages/Configuracoes';
import BotaoEmergencia from './pages/BotaoEmergencia';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background">
        <Navbar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicamentos" element={<Medicamentos />} />
            <Route path="/saude" element={<Saude />} />
            <Route path="/familiares" element={<Familiares />} />
            <Route path="/notificacoes" element={<Notificacoes />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
          </Routes>
        </main>
        <BotaoEmergencia />
      </div>
    </Router>
  );
}

export default App;