// src/pages/NuevaProfesionPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProfesionById, updateProfesion, createProfesion } from '../api/profesiones';  // Importamos las funciones de API
import { Box, TextField, Button } from '@mui/material';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const NuevaProfesionPage = () => {
    const [nombreProfesion, setNombreProfesion] = useState('');
    const { id } = useParams();  // Obtenemos el ID de la URL si es un caso de edición
    const navigate = useNavigate();  // Para redirigir después de la acción

    // Cargar la profesión si estamos en modo edición
    useEffect(() => {
        if (id) {
            // Si hay un ID, significa que estamos editando
            getProfesionById(id)
                .then((profesion) => {
                    setNombreProfesion(profesion.nombreProfesion);  // Llenamos el formulario con los datos existentes
                })
                .catch((error) => console.error('Error al obtener la profesión:', error));
        }
    }, [id]);  // Dependemos del ID para que recargue si cambia

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Confirmación antes de crear o actualizar
        const confirmMessage = id 
            ? `¿Estás seguro de que deseas actualizar la profesión "${nombreProfesion}"?` 
            : `¿Estás seguro de que deseas crear la profesión "${nombreProfesion}"?`;

        const result = await Swal.fire({
            title: 'Confirmar',
            text: confirmMessage,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, continuar',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            try {
                if (id) {
                    // Si hay un ID, actualizamos la profesión
                    await updateProfesion(id, nombreProfesion);
                    Swal.fire({
                        title: 'Éxito',
                        text: 'Profesión actualizada correctamente.',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                    });
                } else {
                    // Si no hay ID, creamos una nueva profesión
                    await createProfesion(nombreProfesion);
                    Swal.fire({
                        title: 'Éxito',
                        text: 'Profesión creada correctamente.',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                    });
                }
                navigate('/profesiones');  // Redirigimos a la lista de profesiones
            } catch (error) {
                console.error('Error al procesar la profesión:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un error al procesar la profesión. Intenta nuevamente.',
                    icon: 'error',
                    confirmButtonColor: '#d33',
                });
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto', paddingTop: 3 }}>
            <TextField
                label="Nombre de la Profesión"
                value={nombreProfesion}
                onChange={(e) => setNombreProfesion(e.target.value)} // Actualizamos el estado cuando el usuario modifica el campo
                fullWidth
                required
            />
            <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
                {id ? 'Actualizar Profesión' : 'Crear Profesión'}  {/* Cambia el texto del botón según el caso */}
            </Button>
        </Box>
    );
};

export default NuevaProfesionPage;
