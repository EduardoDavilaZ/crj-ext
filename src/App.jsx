import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';

import InfanciaInfo from './features/projects/infancia-hospitalizada/InfoPage';
import InfanciaForm from './features/projects/infancia-hospitalizada/Form';

import ExitoInfo from './features/projects/exito-escolar/InfoPage';
import ExitoForm from './features/projects/exito-escolar/Form';

import EspaciosInfo from './features/projects/espacios-educativos/InfoPage';
import EspaciosForm from './features/projects/espacios-educativos/Form';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ayuda" element={<Help />} />
        
        <Route path="/proyecto/infancia-hospitalizada" element={<InfanciaInfo />} />
        <Route path="/apuntarme/infancia-hospitalizada" element={<InfanciaForm />} />

        <Route path="/proyecto/exito-escolar" element={<ExitoInfo />} />
        <Route path="/apuntarme/exito-escolar" element={<ExitoForm />} />

        <Route path="/proyecto/espacios-educativos" element={<EspaciosInfo />} />
        <Route path="/apuntarme/espacios-educativos" element={<EspaciosForm />} />
        
      </Routes>
    </Router>
  );
}