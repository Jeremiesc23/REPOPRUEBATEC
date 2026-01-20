import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createPersona, updatePersona, getPersonaById } from '../api/personas';
import { getProfesiones } from '../api/profesiones';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Swal from 'sweetalert2'; // Importa SweetAlert2

const calcularEdad = (fecha) => {
  if (!fecha) return "";
  const nac = new Date(fecha);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nac.getFullYear();
  const m = hoy.getMonth() - nac.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < nac.getDate())) edad--;
  return edad;
};

const NuevaPersonaPage = () => {
  const navigate = useNavigate();
  const { id: idPersona } = useParams();

  const [profesiones, setProfesiones] = useState([]);
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [dui, setDui] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [trabaja, setTrabaja] = useState('');
  const [profesionId, setProfesionId] = useState('');

  const edad = useMemo(() => calcularEdad(fechaNacimiento), [fechaNacimiento]);

  useEffect(() => {
    getProfesiones()
      .then(setProfesiones)
      .catch((error) => console.error('Error al obtener profesiones:', error));
  }, []);

  useEffect(() => {
    if (!idPersona) return;

    getPersonaById(idPersona)
      .then((persona) => {
        setNombres(persona.nombres ?? '');
        setApellidos(persona.apellidos ?? '');
        setDui(persona.dui ?? '');
        setSexo(persona.sexo ?? '');
        setFechaNacimiento(persona.fechaNacimiento ?? '');
        setTrabaja(persona.trabaja ?? '');

        if (persona.profesionId != null) setProfesionId(String(persona.profesionId));
        if (persona.profesion?.idProfesion != null) setProfesionId(String(persona.profesion.idProfesion));
      })
      .catch((error) => console.error('Error al obtener la persona:', error));
  }, [idPersona]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const personaData = {
      nombres,
      apellidos,
      dui,
      sexo,
      fechaNacimiento,
      trabaja,
      profesion: profesionId ? { idProfesion: Number(profesionId) } : null
    };

    try {
      const confirmMessage = idPersona ? '¿Estás seguro de que deseas actualizar esta persona?' : '¿Estás seguro de que deseas crear esta persona?';
      
      // Alerta de confirmación antes de enviar el formulario
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
        if (idPersona) {
          await updatePersona(idPersona, personaData);
        } else {
          await createPersona(personaData);
        }
        
        // Alerta de éxito
        Swal.fire({
          title: 'Éxito',
          text: idPersona ? 'Persona actualizada correctamente.' : 'Persona creada correctamente.',
          icon: 'success',
          confirmButtonColor: '#3085d6',
        });
        
        navigate('/personas');
      }

    } catch (error) {
      console.error('Error al procesar la persona:', error);
      Swal.fire({
        title: 'Error',
        text: 'Hubo un error al procesar la persona. Intenta nuevamente.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 450, margin: 'auto', paddingTop: 3 }}>
      <TextField label="Nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} fullWidth required />
      <TextField label="Apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} fullWidth required sx={{ mt: 2 }} />
      <TextField label="DUI" value={dui} onChange={(e) => setDui(e.target.value)} fullWidth required sx={{ mt: 2 }} disabled={!!idPersona} />
      
      <FormControl fullWidth required sx={{ mt: 2 }}>
        <InputLabel>Sexo</InputLabel>
        <Select value={sexo} label="Sexo" onChange={(e) => setSexo(e.target.value)}>
          <MenuItem value="M">Masculino</MenuItem>
          <MenuItem value="F">Femenino</MenuItem>
        </Select>
      </FormControl>

      <TextField label="Fecha de Nacimiento" type="date" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} fullWidth required sx={{ mt: 2 }} InputLabelProps={{ shrink: true }} />
      <TextField label="Edad (calculada)" value={edad} fullWidth sx={{ mt: 2 }} disabled />
      
      <FormControl fullWidth required sx={{ mt: 2 }}>
        <InputLabel>¿Trabaja?</InputLabel>
        <Select value={trabaja} label="¿Trabaja?" onChange={(e) => setTrabaja(e.target.value)}>
          <MenuItem value="SI">SI</MenuItem>
          <MenuItem value="NO">NO</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel>Profesión</InputLabel>
        <Select value={profesionId} label="Profesión" onChange={(e) => setProfesionId(e.target.value)}>
          <MenuItem value="">Sin profesión</MenuItem>
          {profesiones.map((p) => (
            <MenuItem key={p.idProfesion} value={p.idProfesion}>
              {p.nombreProfesion}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 3 }}>
        {idPersona ? 'Actualizar Persona' : 'Crear Persona'}
      </Button>
    </Box>
  );
};

export default NuevaPersonaPage;
