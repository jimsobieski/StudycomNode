var express = require('express');
var router = express.Router();

/* GET users listing. */
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

module.exports = router;
