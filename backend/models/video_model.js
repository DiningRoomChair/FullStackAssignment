const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
    title: {type: String, required: true},
    rating: {type: String, required: true},
    length: {type: String, required: true},
    genre:{type: String, required: true},
    status: {type: String, required: true},
    director: {type: String, required: true}
})

module.exports = mongoose.model('Video', videoSchema);
