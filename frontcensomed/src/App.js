// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Usamos Routes y Route de react-router-dom
import Sidebar from './components/Sidebar'; // Tu Sidebar para navegación
import ProfesionesPage from './pages/ProfesionPage'; // Página que muestra la lista de profesiones
import NuevaProfesionPage from './pages/NuevaProfesionPage'; // Página para agregar nueva profesión
import PersonaPage from './pages/PersonaPage';  // Página que muestra la lista de personas
import NuevaPersonaPage from './pages/NuevaPersonaPage';  // Página para agregar nueva persona

function App() {
    return (
        <Router>
            <div style={{ display: 'flex' }}>
                <Sidebar /> {/* Barra lateral con la navegación */}
                <div style={{ flex: 1, padding: 20 }}>
                    <Routes> {/* Usamos Routes para envolver las rutas */}
                        <Route path="/profesiones" element={<ProfesionesPage />} /> {/* Usamos element en lugar de component */}
                        <Route path="/nueva-profesion" element={<NuevaProfesionPage />} />
                         <Route path="/editar-profesion/:id" element={<NuevaProfesionPage />} />
                         <Route path="/personas" element={<PersonaPage />} />
                <Route path="/nueva-persona" element={<NuevaPersonaPage />} />  
                 <Route path="/editar-persona/:id" element={<NuevaPersonaPage  />} /> {/* Ruta dinámica con ID */}
                 
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
