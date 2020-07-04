
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin:admin@cluster0.iv0lq.mongodb.net/<dbname>?retryWrites=true&w=majority')
.then(() => {
    console.log('DB Connected');
}, err => {
    console.log(err);
});

