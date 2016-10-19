let mongoose = require('./connection');

let userSchema = mongoose.Schema({
  _id: Number,
  userName: String,
  email: String,
  email_verified: Boolean,
  password: String,
  profileImageUrl: String,
  country: String,
  totalAccuracy: Number,
  totalReactionTime: Number,
  achievments: [String],
  completedLevels: [{ type: Number, ref: 'GameMode' }]
});

module.exports = mongoose.model('User', userSchema, 'users');

