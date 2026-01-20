package com.example.pruebatecnica.controller;

import com.example.pruebatecnica.model.Profesion;  // Cambiar la importación aquí
import com.example.pruebatecnica.service.ProfesionService;  // Cambiar la importación aquí
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/profesiones")
public class ProfesionController {

    @Autowired
    private ProfesionService profesionService;

    @GetMapping
    public List<Profesion> getAllProfesiones() {
        return profesionService.getAllProfesiones();
    }

    @PostMapping
    public Profesion createProfesion(@RequestBody Profesion profesion) {
        return profesionService.createProfesion(profesion);
    }

    @PutMapping("/{id}")
    public Profesion updateProfesion(@PathVariable Long id, @RequestBody Profesion profesion) {
        return profesionService.updateProfesion(id, profesion);
    }

    @DeleteMapping("/{id}")
    public void deleteProfesion(@PathVariable Long id) {
        profesionService.deleteProfesion(id);
    }
    @GetMapping("/{id}")
public Profesion getProfesionById(@PathVariable Long id) {
    return profesionService.getProfesionById(id);
}

}
