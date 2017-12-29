var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var router = express.Router();
var port = process.env.PORT || 8081;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});


// creation connexion bdd
var db = require('./database/model');



//SOCKETS
var http = require('http');
var fs = require('fs');

// Chargement du fichier index.html affiché au client
var server = http.createServer(function (req, res) {
    fs.readFile('./index.html', 'utf-8', function (error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {

    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });

    socket.on('joinChannel', function (channel) {
        console.log('Un user est connecté aut topic !');
        socket.join(channel);
        io.in(channel).emit('joinChannel', 'hello topic');

        socket.on('newMessage', function (message) {
            console.log(message);
            io.in(channel).emit('newMessage', message);
        });

    });
});

module.exports = app;


// USERS REQUESTS

router.route('/user')
    .post(function(req,res) {
        var user = db.User.findOne({
            where: {token: req.body.token},
        }).then(user => {
            res.json(user);
    });

    });

// TOPIC REQUESTS


// CONTACTS REQUESTS

// AUTHENTICATION REQUESTS

router.route('/logout')
    .post(function(req,res){
        db.User.findOne({
            where: {token: req.body.token}
        }).then(function(){
            db.User.update({
                token: ''
            }, { where: {token: req.body.token}
            });
            res.json({ token: '' });
        });
    });

router.route('/signin')
    .post(function(req,res){
        db.User.findOne({
            where: {email: req.body.email, password: req.body.password},
        }).then(function(){
            var token = jwt.sign({email: req.body.email, password: req.body.password}, 'shhhh');
            db.User.update({
                token: token
            }, { where: {email: req.body.email, password: req.body.password}
            });
            res.json({ token: token });
        });

    });

router.route('/signup')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

app.use('/api', router);

app.listen(port);