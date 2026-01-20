package com.example.pruebatecnica.controller;

import com.example.pruebatecnica.model.Persona;  // Cambiar la importación aquí
import com.example.pruebatecnica.service.PersonaService;  // Cambiar la importación aquí
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/personas")
public class PersonaController {

    @Autowired
    private PersonaService personaService;

    @GetMapping
    public List<Persona> getAllPersonas() {
        return personaService.getAllPersonas();
    }

    @PostMapping
    public Persona createPersona(@RequestBody Persona persona) {
        return personaService.createPersona(persona);
    }

    @PutMapping("/{id}")
    public Persona updatePersona(@PathVariable Long id, @RequestBody Persona persona) {
        return personaService.updatePersona(id, persona);
    }

    @DeleteMapping("/{id}")
    public void deletePersona(@PathVariable Long id) {
        personaService.deletePersona(id);
    }
      // Nuevo endpoint para buscar por ID
    @GetMapping("/{id}")
    public Persona getPersonaById(@PathVariable Long id) {
        return personaService.getPersonaById(id);
    }

}
