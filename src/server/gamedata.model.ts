let mongoose = require('./connection');

let gamedataSchema = mongoose.Schema({
  _id: Number,
  user: { type: Number, ref: 'User' },
  gameMode: String,
  gameLevel: Number,
  avgReactionTime: Number,
  accuracy: Number,
  timestamp: Date
});

module.exports = mongoose.model('GameData', gamedataSchema, 'gamedata');

