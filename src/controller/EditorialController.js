const Editorial = require('../models/editorial');
const Book = require('../models/book');


const EditorialController = {
    getAllEditorial: async (req, res) => {
        const allEditorials = await Editorial.find({});
        return res.json(allEditorials);
    },
    getBooksByEditorialId: async (req, res) => {
        const editorialFinded = await Editorial.findById(req.params.id);
        if (editorialFinded) {
            const books = await Book.find({ editorial: editorialFinded.id });
            return res.json(books);
        }
        return res.status(404).send('Editorial not found');
    },
    getEditorialById: async (req, res) => {
        const editorialFinded = await Editorial.findById(req.params.id);
        if (editorialFinded) {
            return res.json(editorialFinded);
        }
        return res.status(404).send('Editorial not found');
    },
    createEditorial: async (req, res) => {
        const newEditorial = new Editorial(req.body);
        try {
            let editorialSaved = await newEditorial.save();
            return res.json(editorialSaved);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    updateEditorial: async (req, res) => {
        const editorial = new Editorial(req.body);

        const editorialSaved = Editorial.findById(editorial.id).exists();

        if (editorialSaved) {
            new Editorial(editorial);
            const editorialUpdated = editorialSaved.save();
            return res.json(editorialUpdated);
        }
        return res.status(404).send('Editorial not found');
    },
    deleteEditorial: async (req, res) => {
        const editorial = await Editorial.findById(req.params.id);
        if (!editorial) {
            return res.status(404).send('Editorial not found');
        }
        editorial.deleteOne();
        return res.status(200).send('Editorial deleted')
    }
}


module.exports = EditorialController;