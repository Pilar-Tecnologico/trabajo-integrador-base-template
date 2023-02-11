const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const clubSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    image: {
        type: String, 
        default: "default.png"
    },
    coordinates: {
        type: [String]
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

module.exports = model("Club", clubSchema);