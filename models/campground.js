const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CampgroundSchema = new Schema ({
    title : {
        type : String
    },
    location : {
        type : String
    },
    price : {
        type : Number
    },
    description : {
        type : String
    },
    image : {
        type : String
    }
});

module.exports = mongoose.model('Campground',CampgroundSchema);