package com.example.pruebatecnica;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
public void addCorsMappings(CorsRegistry registry) {
  registry.addMapping("/api/**")
      .allowedOrigins(
          "http://localhost:3000",
          "https://frontend-756570331238.us-central1.run.app"
      )
      .allowedMethods("GET","POST","PUT","DELETE","OPTIONS")
      .allowedHeaders("*");
                // Si NO usas cookies/sesión, déjalo así (mejor).
                // Si SÍ usas cookies/sesión:
                // .allowCredentials(true);
    }
}
