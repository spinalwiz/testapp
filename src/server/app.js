var express = require('express');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));
app.use('/', express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
mongoose.Promise = global.Promise;

var Car = require('./car.model.js');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    var redCar = new Car({
        name: 'Silence',
        id: 1,
        size: "Massive"
    });
    redCar.vroom();

    redCar.save(function (err, fluffy) {
        if (err) return console.error(err);
        redCar.vroom();
    });
});


// all other routes are handled by Angular
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '/../../dist/index.html'));
});

app.listen(app.get('port'), function () {
    console.log('Angular 2 Full Stack listening on port ' + app.get('port'));
});


module.exports = app;