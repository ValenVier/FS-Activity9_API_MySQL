const router = require('express').Router();

//Rutas
router.use('/authors', require('./api/authors')); //todas las peticiones que entren con esta ruta se gestionara en authors.js
router.use('/posts', require('./api/posts')); //todas las peticiones que entren con esta ruta se gestionara en posts.js

module.exports = router;