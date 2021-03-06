var express = require('express');
var cors = require('cors');
var path = require('path');
var morgan = require('morgan'); // logger
var bodyParser = require('body-parser');
var jwt = require('express-jwt');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../../dist'));
app.use('/', express.static(__dirname + '/../public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

var jwtCheck = jwt({
    secret: new Buffer('pYpMG0ZBFYLu6ioF6dXQS6BqOlqplfaAPn1NIV4WeIApsJ3vDnvyl9pnetZnfOrP', 'base64'),
    audience: 'YNBFHMd7KYaPBCDoH5fQfVmbEi4WUSTW'
});
app.use('/api/secured', jwtCheck);

app.use(morgan('dev'));

//Set up DB
var mongoose = require('./connection');
var Highscore = require('./highscores.model.ts');
var Gamemode = require('./gamemodes.model.ts');
var User = require('./users.model.ts');
var BulletData = require('./bulletdata.model.ts');
var GameData = require('./gamedata.model.ts');

app.get('/api/secured/ping', function (req, res) {
  res.status(200).json({"test": "Authorised"});
});

// APIs
//Gamemodes
app.get('/api/gamemodes', function (req, res) {
    Gamemode.find({}, function (err, docs) {
        if (err) return console.error(err);
        res.json(docs);
    });
});

//Highscores
// select all
app.get('/api/highscores', function (req, res) {
    Highscore.find({}, function (err, docs) {
        if (err) return console.error(err);
        res.json(docs);
        console.log("/highscores");
    });
});

//GameData
app.get('/api/gamedata', function (req, res) {
  GameData.find({}, function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  });
});

//BulletData
app.get('/api/bulletdata', function (req, res) {
  console.log("bulletdata");
  BulletData.find({}, function (err, docs) {
    if (err) return console.error(err);
    res.json(docs);
  });
});

// create
app.post('/api/bulletdata/add', function (req, res) {
  console.log(req.body);
  var newBullet = new BulletData(req.body);
  newBullet.save(function (err, obj) {
    if (err) return console.error(err);
    res.status(200).json(obj);
  });
});

//User by userid
app.get('/api/username/:userid', function (req, res) {
  var u = req.params['userid'];
  var q = User.findOne({_id: u}).lean();
  q.exec(function (err, docs) {
    if (err) return console.error(err);
    console.log(`user: ${docs[0].userName} email: ${docs[0].resendEmail()}`);
    res.json(docs[0]);
  });
});

//User by username
app.get('/api/userid/:username', function (req, res) {
  var u = req.params['userName'];
  var q = User.findOne({_id: u}).lean();
  q.exec(function (err, docs) {
    if (err) return console.error(err);
    console.log(`user: ${docs[0].userName} email: ${docs[0].email}`);
    res.json(docs[0]);
  });
});

// find Highscore by username
app.get('/api/highscores/username/:username', function (req, res) {
    var u = req.params['username'];
    var q = Highscore.find({userName: u}).lean().sort({'score': -1}).limit(1);
    q.exec(function (err, docs) {
        if (err) return console.error(err);
        // console.log(docs);
        res.json(`user: ${docs[0].userName} score: ${docs[0].score}`);
        console.log("/userName");
    });
});

// count all
app.get('/api/highscores/count', function (req, res) {
    Highscore.count(function (err, count) {
        if (err) return console.error(err);
        res.json(count);
    });
});

// create
app.post('/api/highscore/add', function (req, res) {
    var newScore = new Highscore({
        "user": "",
        "userName": req.body.userName,
        "score": req.body.score,
        "date": ""
    });
  console.log(req);
    newScore.save(function (err, obj) {
        if (err) return console.error(err);
        res.status(200).json(obj);
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
