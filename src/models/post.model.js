const selectAllPosts = () => {
    return db.query('select * from posts');
};

const selectAllPostsByAuthor = (surnameAuthor) => {
    return db.query(`select p.*, a.surname from api_mysql.posts as p join api_mysql.authors as a on authors_id=id_authors where a.surname = ? order by p.title asc`, [surnameAuthor]);
};

const selectPostById = (postId) => {
    return db.query(`select * from posts where id_posts = ?`, [postId]);
};

const insertPost = ({ title, description, category, authors_id }) => {
    return db.query(`insert into posts (title, description, category, authors_id)
    values (?,?,?,?)`, [title, description, category, authors_id]);
};

module.exports = { selectAllPosts, selectPostById, insertPost, selectAllPostsByAuthor }