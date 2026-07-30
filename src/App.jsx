import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Importas las vistas específicas que ya tienes creadas en tus carpetas
import InfanciaInfo from './features/projects/infancia-hospitalizada/InfoPage';
import InfanciaForm from './features/projects/infancia-hospitalizada/Form';

import ExitoInfo from './features/projects/exito-escolar/InfoPage';
import ExitoForm from './features/projects/exito-escolar/Form';

// Y así sucesivamente para los demás proyectos...

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Rutas estáticas/personalizadas por proyecto apuntando a su carpeta */}
        <Route path="/proyecto/infancia-hospitalizada" element={<InfanciaInfo />} />
        <Route path="/apuntarme/infancia-hospitalizada" element={<InfanciaForm />} />

        <Route path="/proyecto/exito-escolar" element={<ExitoInfo />} />
        <Route path="/apuntarme/exito-escolar" element={<ExitoForm />} />
        
        {/* Próximos proyectos... */}
      </Routes>
    </Router>
  );
}