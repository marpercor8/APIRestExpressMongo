
// Load database

require('./src/config/database.js')();


// Load express

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// Constants

const port = 3000

// Body parser middleware

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

// Logger middleware

const middleware = (req, res, next) => {
  console.log("Logger: " + req.url + " | " + req.method)
  next();
}
app.use(middleware);


// BookController routes
const BookController = require('./src/controller/BookController.js');

app.get('/book', BookController.getAllBook);
app.get('/book/:id', BookController.getBookById);
app.put('/book', BookController.updateBook);
app.post('/book', BookController.createBook);
app.delete('/book/:id', BookController.deleteBook);

// EditorialController routes

const EditorialController = require('./src/controller/EditorialController.js');

app.get('/editorial', EditorialController.getAllEditorial);
app.get('/editorial/:id', EditorialController.getEditorialById);
app.get('/editorial/:id/books', EditorialController.getBooksByEditorialId);
app.put('/editorial', EditorialController.updateEditorial);
app.post('/editorial', EditorialController.createEditorial);
app.delete('/editorial/:id', EditorialController.deleteEditorial);


// Start server

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



