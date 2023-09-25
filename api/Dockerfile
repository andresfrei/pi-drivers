# Use una imagen de Alpine Linux como base
FROM node:18-alpine

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos del proyecto al directorio de trabajo
COPY . .

# Instala las dependencias del proyecto
RUN npm install

# Comando para ejecutar la aplicación cuando se inicia el contenedor
CMD ["npm", "start"]
