const AuthorController = require("../controllers/author.controller");

module.exports = app => {
    app.post("/api/authors", AuthorController.createNewAuthor);
}