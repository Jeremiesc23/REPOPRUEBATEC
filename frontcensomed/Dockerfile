# Usa la imagen base de Node.js para construir la aplicación
FROM node:16 as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias y luego instala
COPY package*.json ./
RUN npm install

# Copia todo el código fuente
COPY . .