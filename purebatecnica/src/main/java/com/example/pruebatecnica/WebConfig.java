package com.example.pruebatecnica;  // Usa el paquete adecuado

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")  // Cambia según la ruta de tu API
                .allowedOrigins("http://localhost:3000")  // URL de tu frontend
                .allowedMethods("GET", "POST", "PUT", "DELETE")  // Métodos permitidos
                .allowedHeaders("*")  // Permitir todos los headers
                .allowCredentials(true);  // Permite credenciales si es necesario
    }
}
