FROM openjdk:8-jdk as build



# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo JAR generado en la compilación
COPY target/purebatecnica-*.jar app.jar

# Expone el puerto que usa la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
