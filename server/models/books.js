/*   File name: books.js
     Student name: Parth Patel
     Student ID: 301207843
     Web page: favourite books 
*/

let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
