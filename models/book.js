const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    publisher: {
        type: String,
        require: true,
        minlength: 5
    },
    title: {
        type: String,
        require: true,
        minlength: 5
    } ,
    author: {
        type: String,
        require: true,
        minlength: 5
    },
    publishedon:{
        type:String,
        required:true,
        minlength:4
    }


});
module.exports= mongoose.model('book',bookSchema)