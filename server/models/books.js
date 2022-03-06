/*   File name: books.js
     Student name: Vinit Purohit
     Student ID: 301170869
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
