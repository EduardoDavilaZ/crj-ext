import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Help from './pages/Help';

// --- Infancia Hospitalizada ---
import InfanciaInfo from './features/projects/infancia-hospitalizada/InfoPage';
import InfanciaForm from './features/projects/infancia-hospitalizada/Form';

// --- Éxito Escolar ---
import ExitoInfo from './features/projects/exito-escolar/InfoPage';
import ExitoForm from './features/projects/exito-escolar/Form';

// --- Espacios Educativos ---
import EspaciosInfo from './features/projects/espacios-educativos/InfoPage';
import EspaciosForm from './features/projects/espacios-educativos/Form';

import EspacioInfo from './features/projects/espacio-propio/InfoPage';
import EspacioForm from './features/projects/espacio-propio/Form';

import JugueteInfo from './features/projects/juguete-educativo/InfoPage';
import JugueteForm from './features/projects/juguete-educativo/Form';

import NtpInfo from './features/projects/no-te-pases/InfoPage';
import NtpForm from './features/projects/no-te-pases/Form';

import EsieInfo from './features/projects/esie/InfoPage';
import EsieForm from './features/projects/esie/Form';

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
        
        <Route path="/proyecto/espacio-propio" element={<EspacioInfo />} />
        <Route path="/apuntarme/espacio-propio" element={<EspacioForm />} />
        
        <Route path="/proyecto/juguete-educativo" element={<JugueteInfo />} />
        <Route path="/apuntarme/juguete-educativo" element={<JugueteForm />} />

        <Route path="/proyecto/no-te-pases" element={<NtpInfo />} />
        <Route path="/apuntarme/no-te-pases" element={<NtpForm />} />

        <Route path="/proyecto/esie" element={<EsieInfo />} />
        <Route path="/apuntarme/esie" element={<EsieForm />} />
      </Routes>
    </Router>
  );
}