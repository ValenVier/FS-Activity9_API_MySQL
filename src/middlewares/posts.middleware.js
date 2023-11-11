const PostModel = require('../models/post.model');

const checkPostFormat = async (req, res, next) => {
    try {
        const post = req.body;
        let messageBug = `Debe solucionar los siguientes errores antes de poder guardar el post`;
        let cont = 0; 

        post.title === undefined ? cont++ : typeof post.title === "string" ? cont++ : messageBug += ", el título no es una cadena de texto";
        post.description === undefined ? cont++ : typeof post.description === "string" ? cont++ : messageBug += ", la descripción no es una cadena de texto";
        post.category === undefined ? cont++ : typeof post.category === "string" ? cont++ : messageBug += ", la categoría no es una cadena de texto";
        post.authors_id === undefined ? cont++ : !isNaN(post.authors_id) ? cont++ : messageBug += ", el id del autor debe ser un número";

        cont === 4 ? next() : res.json({ fatal: messageBug });

    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { checkPostFormat }