const router = require('express').Router();
const PostsController = require('../../controllers/posts.controller');
const { checkUsername } = require('../../middlewares/authors.middleware');
const { checkPostFormat } = require('../../middlewares/posts.middleware');

//get
router.get('/', PostsController.getAllPost); //Obtener todos los posts
router.get('/:authorSurname', checkUsername, PostsController.getAllPostFromAuthorBySurname);

//post
router.post('/',checkPostFormat, PostsController.createPost);//crear posts


//Exporto
module.exports = router;