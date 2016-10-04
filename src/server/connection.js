var mongoose = require('mongoose');

mongoose.connect('mongodb://spinalwiz:Optick11@ds033986.mlab.com:33986/phtestdb');
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
    console.log('DB Connected');
});

module.exports = mongoose;

