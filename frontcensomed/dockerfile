# Usa la imagen base de Node.js para construir la aplicación
FROM node:16 as build

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias y luego instala
COPY package*.json ./
RUN npm install

# Copia todo el código fuente
COPY . .

# Construye la aplicación
RUN npm run build

# Usa una imagen de Nginx para servir la aplicación
FROM nginx:alpine

# Copia los archivos construidos a Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expone el puerto 80
EXPOSE 80
