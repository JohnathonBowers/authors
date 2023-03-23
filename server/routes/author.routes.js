const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.get("/api/authors", AuthorController.findAllAuthors);
    app.get("/api/authors/:id", AuthorController.findOneAuthor);
    app.post("/api/authors", AuthorController.createNewAuthor);
}