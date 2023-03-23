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
        Author.find({}).sort({authorName: 'asc'})
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.status(400).json(err))
    },
    // Find one author
    findOneAuthor: (req, res) => {
        Author.findById(req.params.id)
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.status(400).json(err))
    },
    // Update one author
    updateOneAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err))
    },
    // Delete one author
    deleteOneAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.status(400).json(err))
    }
}