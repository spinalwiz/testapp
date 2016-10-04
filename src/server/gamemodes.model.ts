let mongoose = require('./connection');

let gamemodesSchema = mongoose.Schema({
    gamemode: String,
    level: Number,
    name: String,
    imageurl: String,
    description: String
});

module.exports = mongoose.model('Gamemodes', gamemodesSchema);;