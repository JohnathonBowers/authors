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
    },
    // Find all authors
    findAllAuthors: (req, res) => {
        Author.find({})
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.status(400).json(err))
    },
    // Find one author
    findOneAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.status(400).json(err))
    }
}