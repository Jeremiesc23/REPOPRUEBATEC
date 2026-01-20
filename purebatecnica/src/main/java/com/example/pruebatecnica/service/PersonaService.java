package com.example.pruebatecnica.service;

import com.example.pruebatecnica.model.Persona;
import com.example.pruebatecnica.repository.PersonaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonaService {

    @Autowired
    private PersonaRepository personaRepository;

    public List<Persona> getAllPersonas() {
        return personaRepository.findAll();
    }

    public Persona createPersona(Persona persona) {
        return personaRepository.save(persona);
    }

   public Persona updatePersona(Long id, Persona personaData) {
    Persona persona = personaRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Persona no encontrada"));

    persona.setNombres(personaData.getNombres());
    persona.setApellidos(personaData.getApellidos());
    persona.setDui(personaData.getDui());
    persona.setSexo(personaData.getSexo());
    persona.setFechaNacimiento(personaData.getFechaNacimiento());
    persona.setTrabaja(personaData.getTrabaja());
    persona.setProfesion(personaData.getProfesion()); // guarda profesion_id

    return personaRepository.save(persona);
}

    public void deletePersona(Long id) {
        personaRepository.deleteById(id);
    }
        // Nuevo método para buscar por ID
    public Persona getPersonaById(Long id) {
        return personaRepository.findById(id).orElse(null);  // Devuelve la persona o null si no existe
    }

}

