const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
        minlength: 5
    },
    lastname: {
        type: String,
        require: true,
        minlength: 5
    } ,
    email: {
        type: String,
        require: true,
        minlength: 5
    } 
});
module.exports= mongoose.model('user',userSchema)