package com.example.pruebatecnica.repository;

import com.example.pruebatecnica.model.Profesion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProfesionRepository extends JpaRepository<Profesion, Long> {
}
