const mongoose = require('mongoose');


const Editorial = mongoose.model('Editorial', 
    { 
        name: String,
        books: [
            { 
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Book' 
            }
        ]	
    }
);

module.exports = Editorial;