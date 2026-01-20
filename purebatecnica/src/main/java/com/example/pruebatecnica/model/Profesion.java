package com.example.pruebatecnica.model;

import jakarta.persistence.*;

@Entity
@Table(name = "profesiones")
public class Profesion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_profesion")
    private Long idProfesion;

    @Column(name = "nombre_profesion", nullable = false, length = 100)
    private String nombreProfesion;

    // ===== Getters y Setters =====

    public Long getIdProfesion() {
        return idProfesion;
    }

    public void setIdProfesion(Long idProfesion) {
        this.idProfesion = idProfesion;
    }

    public String getNombreProfesion() {
        return nombreProfesion;
    }

    public void setNombreProfesion(String nombreProfesion) {
        this.nombreProfesion = nombreProfesion;
    }
}
