var express = require('express');

var app = express();

// creation connexion bdd
require('./database/model');



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


var router = express.Router();

// USERS REQUESTS
router.route('/user/:idUser')
    .get(function(req,res){
        res.status(200).send({user: "loic"});
    });

router.route('/user/update')
    .post(function(req,res){
        res.status(200).send({user: "loic", modified: "yes"});
    });

router.route('/user/:idUser/topic')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/contacts/get')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idAuthor/number/contacts')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/user2/:idAuthor/mutual/contacts')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/user2/:idAuthor/mutual/topics')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/topic/:idTopic/leave')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });


// TOPIC REQUESTS
router.route('/topic/sendMessage')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/topic/:idTopic/delete')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/contact/:idContact/delete')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/topic/:idTopic/member/:idUser/delete')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/topic/userMember')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/topic/:idTopic/get')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/topic/:idTopic/posts')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/topic/:idTopic/users')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/topic')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/topic/delete')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/topic/modify')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/topic/addContact')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/topic/user/delete')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

// CONTACTS REQUESTS
router.route('/contact/:idContact')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/contact/:idContact/get')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/contact/topic/:idContact/get')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/contact/:idContact/delete')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/contact/request')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/requests')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/request/:idRequest/accept')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/user/:idUser/request/:idRequest/refuse')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/author/:idAuthor/get')
    .get(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

// AUTHENTICATION REQUESTS
router.route('/logout')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/signin')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

router.route('/signout')
    .post(function(req,res){
        res.status(200).send({user: "loic", topic: "best topic"});
    });

app.use(router);

app.listen(8080);