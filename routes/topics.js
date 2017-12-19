var express = require('express');
var router = express.Router();

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