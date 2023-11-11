const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

//genero una variable global llamada db. Esto es que puedo acceder a ella desde cualquier parte de mi aplicación
global.db = pool.promise(); //pool es un objeto que nos va a permitir hacer querys, puede trabajar con callbacks y con promesas