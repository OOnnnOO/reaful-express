var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var Genre = require('./models/genre');
var Books = require('./models/book');


// connect to Mongoose
mongoose.connect('mongodb://localhost/bookstone');
var db = mongoose.connection;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('hello world');
});
// genres
app.get('/api/genres', function (req, res) {
  Genre.getGenres(function (err, genres) {
    if (err) {
      throw err;
    }
    res.json(genres);
  })
});

app.post('/api/genres', function (req, res) {
  var genre = req.body;
  Genre.addGenre(genre, function (err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  })
});

app.put('/api/genres/:_id', function (req, res) {
  var id = req.params._id;
  var genre = req.body;
  Genre.updateGenre(id, genre, {}, function (err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  })
});

app.delete('/api/genres/:_id', function (req, res) {
  var id = req.params._id;
  Genre.removeGenre(id, function (err, genre) {
    if (err) {
      throw err;
    }
    res.json(genre);
  })
});
// books
app.get('/api/books', function (req, res) {

  Books.getBooks(function (err, books) {
    if (err) {
      throw err;
    }
    res.json(books);
  })
});

app.get('/api/books/:_id', function (req, res) {
  Books.getBookById(req.params._id, function (err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  })
});

app.post('/api/books', function (req, res) {
  var book = req.body;
  Books.addBook(book, function (err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  })
});

app.put('/api/books/:_id', function (req, res) {
  var id = req.params._id
  var book = req.body;
  Books.updateBook(id, book, {}, function (err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  })
});

app.delete('/api/books/:_id', function (req, res) {
  var id = req.params._id
  Books.removeBook(id, function (err, book) {
    if (err) {
      throw err;
    }
    res.json(book);
  })
});

app.listen(3000, function () {
  console.log('server is Running on localhost:3000 ...')
});
