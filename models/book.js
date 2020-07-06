const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    publisher: {
        type: String,
        require: true,
        minlength: 2
    },
    title: {
        type: String,
        require: true,
        minlength: 2
    } ,
    author: {
        type: String,
        require: true,
        minlength: 2
    },
    publishedon:{
        type:String,
        required:true,
        minlength:2
    },
    genre:{
        type:String,
        required:true,
        minlength:2
    },
    prologue:{
        type:String,
        required:true,
        minlength:2
    }



});
module.exports= mongoose.model('book',bookSchema)