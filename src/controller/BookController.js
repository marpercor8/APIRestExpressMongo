const Book = require('../models/book.js');


const BookController = {
    getAllBook: async (req, res) => {
        const allBooks = await Book.find({});
        return res.json(allBooks);
    },
    getBookById: async (req, res) => {
        const bookFinded = await Book.findById(req.params.id);
        if (bookFinded) {
            return res.json(bookFinded);
        }
        return res.status(404).send('Book not found');
    },
    createBook: async (req, res) => {
        const newBook = new Book(req.body);
        try {
            let bookSaved = await newBook.save();
            return res.json(bookSaved);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    updateBook: async (req, res) => {
        const book = new Book(req.body);

        const bookSaved = Book.findById(book.id).exists();

        if (bookSaved) {
            new Book(book);
            const bookUpdated = bookSaved.save();
            return res.json(bookUpdated);
        }
        return res.status(404).send('Book not found');
    },
    deleteBook: async (req, res) => {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).send('Book not found');
        }
        book.deleteOne();
        return res.status(200).send('Book deleted')
    }
}

module.exports = BookController;