const router = require('express').Router();
const AuthorsController = require('../../controllers/authors.controller');
const { checkAuthorFormat } = require('../../middlewares/authors.middleware');

//get
router.get('/', AuthorsController.getAllAuthors); //Obtener todos los autores

//post
router.post('/',checkAuthorFormat, AuthorsController.createAuthor);//crear autores


//Exporto
module.exports = router;