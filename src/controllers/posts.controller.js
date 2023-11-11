const PostModel = require('../models/post.model');
const AuthorModel = require('../models/author.model');

const getAllPost = async (req, res) => {
    try {
        const [result] = await PostModel.selectAllPosts();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const createPost = async (req, res) => {
    try {
        const [result] = await PostModel.insertPost(req.body);
        const [post] = await PostModel.selectPostById(result.insertId);
        res.json(post[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

const getAllPostFromAuthorBySurname = async (req, res) => {
    try {
        const [posts] = await PostModel.selectAllPostsByAuthor(req.params.authorSurname);
        if(posts.length === 0){
            res.json({ info: "El usuario aun no ha creado ningún post." });
            return;
        }
        res.json(posts);
    } catch (error) {
        res.json({ fatal: error.message });
    }
};

module.exports = { getAllPost, createPost, getAllPostFromAuthorBySurname }