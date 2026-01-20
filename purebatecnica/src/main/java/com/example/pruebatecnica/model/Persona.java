package com.example.pruebatecnica.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "personas")
public class Persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_persona")
    private Long idPersona;

    @Column(name = "nombres", nullable = false, length = 100)
    private String nombres;

    @Column(name = "apellidos", nullable = false, length = 100)
    private String apellidos;

    @Column(name = "dui", nullable = false, unique = true, length = 10)
    private String dui;

    @Column(name = "sexo", nullable = false, length = 1)
    private String sexo;

    @Column(name = "fecha_nacimiento", nullable = false)
    private LocalDate fechaNacimiento;

    @Column(name = "trabaja", nullable = false, length = 2)
    private String trabaja;

    @ManyToOne
    @JoinColumn(name = "profesion_id")
    private Profesion profesion;

    // ===== GETTERS Y SETTERS =====

    public Long getIdPersona() { return idPersona; }
    public void setIdPersona(Long idPersona) { this.idPersona = idPersona; }

    public String getNombres() { return nombres; }
    public void setNombres(String nombres) { this.nombres = nombres; }

    public String getApellidos() { return apellidos; }
    public void setApellidos(String apellidos) { this.apellidos = apellidos; }

    public String getDui() { return dui; }
    public void setDui(String dui) { this.dui = dui; }

    public String getSexo() { return sexo; }
    public void setSexo(String sexo) { this.sexo = sexo; }

    public LocalDate getFechaNacimiento() { return fechaNacimiento; }
    public void setFechaNacimiento(LocalDate fechaNacimiento) { this.fechaNacimiento = fechaNacimiento; }

    public String getTrabaja() { return trabaja; }
    public void setTrabaja(String trabaja) { this.trabaja = trabaja; }

    public Profesion getProfesion() { return profesion; }
    public void setProfesion(Profesion profesion) { this.profesion = profesion; }
}
