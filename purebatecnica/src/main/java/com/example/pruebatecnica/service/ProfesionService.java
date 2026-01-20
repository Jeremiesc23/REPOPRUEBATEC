package com.example.pruebatecnica.service;

import com.example.pruebatecnica.model.Profesion;
import com.example.pruebatecnica.repository.ProfesionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfesionService {

    @Autowired
    private ProfesionRepository profesionRepository;

    public List<Profesion> getAllProfesiones() {
        return profesionRepository.findAll();
    }

    public Profesion createProfesion(Profesion profesion) {
        return profesionRepository.save(profesion);
    }

    public Profesion updateProfesion(Long id, Profesion profesion) {
        profesion.setIdProfesion(id);
        return profesionRepository.save(profesion);
    }

    public void deleteProfesion(Long id) {
        profesionRepository.deleteById(id);
    }
    public Profesion getProfesionById(Long id) {
    return profesionRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Profesión no encontrada con id " + id));
}

}
