const selectAllAuthors = () => {
    return db.query('select * from authors');
};

const selectAuthorById = (authorId) => {
    return db.query(`select * from authors where id_authors = ?`, [authorId]);
};

const insertAuthor = ({ name, surname, email, image }) => {
    return db.query(`insert into authors (name, surname, email, image)
    values (?,?,?,?)`, [name, surname, email, image]);
};

const selectAuthorBySurname = (authorSurname) => {
    return db.query(`select id_authors from authors where surname = ?`, [authorSurname]);
};

module.exports = { selectAllAuthors, selectAuthorById, insertAuthor, selectAuthorBySurname }