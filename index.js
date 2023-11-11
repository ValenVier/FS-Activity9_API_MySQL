const http = require('node:http');
const app = require('./src/app'); //cargo el archivo donde tengo express
require('dotenv').config(); //para leer las variables del archivo .env
require('./src/config/db'); //ejecuto la configuración de la base de datos db.js

const server = http.createServer(app); //creo el servidor con mi aplicación de express en app.js
const PORT = process.env.PORT ?? 3300; //cojo el puerto del archivo .env y sino pongo el 3300
server.listen(PORT);//pongo a escuchar el server

//capturamos los eventos listening y error
server.on('listening', () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
});

server.on('error', (error) => {
    console.log(`Error en el servidor. ${error}`);
});