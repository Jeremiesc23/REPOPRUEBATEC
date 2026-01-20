# ===== BUILD STAGE =====
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app

# Copiamos primero pom para cachear dependencias
COPY pom.xml .
RUN mvn -q -e -DskipTests dependency:go-offline

# Luego el código
COPY src ./src
RUN mvn -q -DskipTests clean package


# ===== RUNTIME STAGE =====
FROM eclipse-temurin:17-jre
WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

# Cloud Run usa la env var PORT
ENV PORT=8080
EXPOSE 8080

# Le pasamos el puerto dinámicamente a Spring
ENTRYPOINT ["sh","-c","java -Dserver.port=${PORT} -jar app.jar"]

