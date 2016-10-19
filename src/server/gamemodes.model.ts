let mongoose = require('./connection');

let gamemodesSchema = mongoose.Schema({
  _id: Number,
  gamemode: String,
  level: Number,
  name: String,
  imageurl: String,
  description: String
});

module.exports = mongoose.model('GameMode', gamemodesSchema, 'gamemodes');
;
