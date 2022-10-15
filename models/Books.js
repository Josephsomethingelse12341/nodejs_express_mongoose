const mongoose = require('mongoose')


const BookSchema = new mongoose.Schema({
    book_name:{
        type: String,
        required: true,
        lowercase: true
    },
    author: String,
    price: Number
})

const Books = mongoose.model('Book', BookSchema)
module.exports = Books