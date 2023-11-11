const AuthorModel = require('../models/author.model');

const getAllAuthors = async (req, res) => {
    try {
        const [result] = await AuthorModel.selectAllAuthors();
        res.json(result);
    } catch (err) {
        res.json({ fatal: err.message });
    }
};

const createAuthor = async (req, res) => {
    try {
        const [result] = await AuthorModel.insertAuthor(req.body);
        const [author] = await AuthorModel.selectAuthorById(result.insertId);
        res.json(author[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

module.exports = { getAllAuthors, createAuthor }