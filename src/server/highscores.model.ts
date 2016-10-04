let mongoose = require('./connection');

let highscoresSchema = mongoose.Schema({
    user: String,
    userName: String,
    score: Number,
    date: String
});

highscoresSchema.methods.printHighscore = function () {
    let outputText = `user: ${this.user} userName: ${this.userName} score: ${this.score} date: ${this.date}`;
    console.log(outputText);
};

module.exports = mongoose.model('Highscore', highscoresSchema);;