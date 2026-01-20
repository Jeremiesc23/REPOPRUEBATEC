import React, { useEffect, useState } from 'react';
import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { getProfesiones, deleteProfesion } from '../api/profesiones';
import Swal from 'sweetalert2';  // Importar SweetAlert2

function ProfesionesPage() {
    const [profesiones, setProfesiones] = useState([]);

    // Obtener las profesiones de la API
    useEffect(() => {
        getProfesiones()
            .then((data) => {
                console.log("Profesiones recibidas de la API:", data); // Verifica los datos que estamos recibiendo
                setProfesiones(data);
            })
            .catch((error) => console.error('Error al obtener las profesiones:', error));
    }, []);

    // Manejar la eliminación de una profesión con confirmación SweetAlert2
    const handleDelete = (idProfesion) => {
        if (!idProfesion) {
            console.error("ID es undefined, no se puede eliminar.");
            return; // No proceder si el ID es inválido
        }

        Swal.fire({
            title: '¿Estás seguro?',
            text: 'Esta acción eliminará permanentemente la profesión.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("Eliminando profesión con ID:", idProfesion);  // Verifica que el id sea el correcto
                deleteProfesion(idProfesion)
                    .then(() => {
                        // Filtra la profesión eliminada y actualiza el estado
                        setProfesiones(profesiones.filter((profesion) => profesion.idProfesion !== idProfesion));  
                        Swal.fire(
                            'Eliminado!',
                            'La profesión ha sido eliminada.',
                            'success'
                        );
                    })
                    .catch((error) => {
                        console.error('Error al eliminar la profesión:', error);
                        Swal.fire(
                            'Error',
                            'Hubo un error al eliminar la profesión.',
                            'error'
                        );
                    });
            }
        });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', margin: 3, padding: 2 }}>
            <h1>Profesiones</h1>
            <Button variant="contained" color="primary" component={Link} to="/nueva-profesion" sx={{ marginBottom: 2 }}>
                Nueva Profesión
            </Button>
            <TableContainer component={Paper} sx={{ marginTop: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {profesiones.map((profesion) => {
                            console.log("Profesión en el map:", profesion); // Verifica la estructura completa de cada profesión
                            return (
                                <TableRow key={profesion.idProfesion} sx={{ '&:hover': { backgroundColor: '#f4f4f4' } }}>
                                    <TableCell>{profesion.nombreProfesion}</TableCell>
                                    <TableCell>
                                        {/* Botón de Editar */}
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            component={Link}
                                            to={`/editar-profesion/${profesion.idProfesion}`} // Cambié de `id` a `idProfesion`
                                        >
                                            Editar
                                        </Button>
                                        {/* Botón de Eliminar */}
                                        <Button
                                            onClick={() => {
                                                console.log("ID de la profesión a eliminar:", profesion.idProfesion);  // Verifica que el id esté definido
                                                if (profesion.idProfesion === undefined) {
                                                    console.error('El idProfesion está indefinido');
                                                } else {
                                                    handleDelete(profesion.idProfesion);  // Cambié de `id` a `idProfesion`
                                                }
                                            }}
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

export default ProfesionesPage;
