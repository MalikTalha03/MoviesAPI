const mongoose = require('mongoose');
const moviesSchema = mongoose.Schema({
    name: String,
    genre: String,
    producer: String,
    year: Number,
    rating: Number,
    poster: String,
});
const Movies = mongoose.model('Movies', moviesSchema);
module.exports = Movies;
