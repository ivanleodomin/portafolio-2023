# Usa una imagen de Node.js como base
FROM node:16-alpine3.11

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación a /app
COPY . .

# Compila la aplicación con TypeScript
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]
