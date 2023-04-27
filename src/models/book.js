const mongoose = require('mongoose');


const Book = mongoose.model('Book', 
    { 
        name: String,
        price: Number,
        editorial: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Editorial' 
        }
    }
);

module.exports = Book;