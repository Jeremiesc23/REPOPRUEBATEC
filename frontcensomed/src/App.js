// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProfesionesPage from './pages/ProfesionPage';
import NuevaProfesionPage from './pages/NuevaProfesionPage';
import PersonaPage from './pages/PersonaPage';
import NuevaPersonaPage from './pages/NuevaPersonaPage';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <div style={{ flex: 1, padding: 20 }}>
                    <Routes>
                        {/* Ruta raíz */}
                        <Route path="/" element={<Navigate to="/profesiones" />} />

                        {/* Profesiones */}
                        <Route path="/profesiones" element={<ProfesionesPage />} />
                        <Route path="/nueva-profesion" element={<NuevaProfesionPage />} />
                        <Route path="/editar-profesion/:id" element={<NuevaProfesionPage />} />

                        {/* Personas */}
                        <Route path="/personas" element={<PersonaPage />} />
                        <Route path="/nueva-persona" element={<NuevaPersonaPage />} />
                        <Route path="/editar-persona/:id" element={<NuevaPersonaPage />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;

