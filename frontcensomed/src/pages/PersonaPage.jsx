import React, { useEffect, useState } from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getPersonas, deletePersona } from '../api/personas';

// Importando las funciones de confirmación
import { confirmDelete } from '../utils/confirmDelete';
import { confirmEdit } from '../utils/confirmEdit';

// Función para calcular la edad
const calcularEdad = (fecha) => {
    if (!fecha) return "";
    const nac = new Date(fecha);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nac.getFullYear();
    const m = hoy.getMonth() - nac.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nac.getDate())) edad--;
    return edad;
};

function PersonasPage() {
    const [personas, setPersonas] = useState([]);
    const [menoresDe18, setMenoresDe18] = useState(0);
    const [mayoresDe18, setMayoresDe18] = useState(0);

    // Obtener las personas de la API
    useEffect(() => {
        getPersonas()
            .then((data) => {
                console.log("Personas recibidas de la API:", data);
                setPersonas(data);

                // Calcular los totales de mayores y menores de 18 años
                const menores = data.filter(persona => calcularEdad(persona.fechaNacimiento) < 18).length;
                const mayores = data.filter(persona => calcularEdad(persona.fechaNacimiento) >= 18).length;

                setMenoresDe18(menores);
                setMayoresDe18(mayores);
            })
            .catch((error) => console.error('Error al obtener las personas:', error));
    }, []);

    // Manejar la eliminación de una persona
    const handleDelete = async (idPersona) => {
        const isConfirmed = await confirmDelete('persona');
        if (isConfirmed) {
            // Lógica para eliminar la persona
            console.log("Persona eliminada con ID:", idPersona);
            deletePersona(idPersona)
                .then(() => {
                    setPersonas(personas.filter((persona) => persona.idPersona !== idPersona));
                })
                .catch((error) => console.error('Error al eliminar la persona:', error));
        } else {
            console.log("Eliminación cancelada");
        }
    };

    // Manejar la edición de una persona
    const handleEdit = async (idPersona) => {
        const isConfirmed = await confirmEdit('persona');
        if (isConfirmed) {
            // Lógica para editar la persona
            console.log("Editando persona con ID:", idPersona);
        } else {
            console.log("Edición cancelada");
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 3, padding: 2 }}>
            <h1>Personas</h1>

            {/* Mostrar los totales de mayores y menores */}
            <Box sx={{ marginBottom: 2 }}>
                <Typography variant="h6"> Menores de 18 años: {menoresDe18}</Typography>
                <Typography variant="h6"> Mayores de 18 años: {mayoresDe18}</Typography>
            </Box>

            <Button variant="contained" color="primary" component={Link} to="/nueva-persona" sx={{ marginBottom: 2 }}>
                Nueva Persona
            </Button>

            <TableContainer component={Paper} sx={{ marginTop: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Apellidos</TableCell>
                            <TableCell>DUI</TableCell>
                            <TableCell>Sexo</TableCell>
                            <TableCell>Fecha de Nacimiento</TableCell>
                            <TableCell>Edad</TableCell>
                            <TableCell>Trabaja</TableCell>
                            <TableCell>Profesión</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {personas.map((persona) => {
                            const edad = calcularEdad(persona.fechaNacimiento); // Calculando edad
                            return (
                                <TableRow key={persona.idPersona} sx={{ '&:hover': { backgroundColor: '#f4f4f4' } }}>
                                    <TableCell>{persona.nombres}</TableCell>
                                    <TableCell>{persona.apellidos}</TableCell>
                                    <TableCell>{persona.dui}</TableCell>
                                    <TableCell>{persona.sexo === 'M' ? 'Masculino' : 'Femenino'}</TableCell>
                                    <TableCell>{persona.fechaNacimiento}</TableCell>
                                    <TableCell>{edad}</TableCell>
                                    <TableCell>{persona.trabaja === 'SI' ? 'Sí' : 'No'}</TableCell>
                                    <TableCell>{persona.profesion?.nombreProfesion || 'Sin profesión'}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            component={Link}
                                            to={`/editar-persona/${persona.idPersona}`}
                                        >
                                            Editar
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(persona.idPersona)}
                                            variant="outlined"
                                            color="error"
                                            sx={{ marginLeft: 2 }}
                                        >
                                            Eliminar
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default PersonasPage;
