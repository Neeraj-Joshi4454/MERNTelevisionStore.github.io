const mongoose = require('mongoose');

const telSchema = mongoose.Schema({

    brand : {
        type : String,
    },
    model : {
        type : String,
    },
    price : {
        type : Number,
    }

})

const Television = new mongoose.model('Television', telSchema);

module.exports = Television;

