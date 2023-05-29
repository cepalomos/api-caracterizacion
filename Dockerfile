# Usa la imagen oficial de Node.js v18
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de tu proyecto al contenedor
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente de la aplicación al contenedor
COPY ./src ./src

# Expone el puerto que utiliza tu aplicación
EXPOSE 3001

# Comando para iniciar la aplicación
CMD [ "npm", "run", "dev" ]
