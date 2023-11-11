const AuthorModel = require('../models/author.model');

const checkAuthorFormat = async (req, res, next) => {
    try {
        const author = req.body;
        let cont = 0;
        var validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        let messageBug = `Debe solucionar los siguientes errores antes de poder guardar el author`;

        author.name === undefined ? cont++ : typeof author.name === "string" ? cont++ : messageBug += ", Nombre no es una cadena de texto";
        author.surname === undefined ? cont++ : typeof author.surname === "string" ? cont++ : messageBug += ", Nombre de usuario no es una cadena de texto";
        author.imagen === undefined ? cont++ : typeof author.imagen === "string" ? cont++ : messageBug += ", Imagen no válida";
        author.email === undefined ? cont++ : validEmail.test(author.email) ? cont++ : messageBug += ", Email no es valido";

        cont === 4 ? next() : res.json({ fatal: messageBug });

    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const checkUsername = async (req, res, next) => {
    try {
        const [a] = await AuthorModel.selectAuthorBySurname(req.params.authorSurname);
        if(a.length === 0){
            res.json({ fatal: "El nombre de usuario no existe en la base de datos." });
            return;
        }
        next();
    } catch (error) {
        res.json({ fatal: error.message });
    }
};


module.exports = { checkAuthorFormat, checkUsername }