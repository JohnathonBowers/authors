const Author = require("../models/author.model")

module.exports = {
    // Create new author
    createNewAuthor: (req, res) => {
        const { authorName } = req.body;
        Author.create({
            authorName: authorName
        })
            .then(createdAuthor => res.json(createdAuthor))
            .catch(err => res.status(400).json(err))
    }
}