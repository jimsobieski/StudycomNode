var express = require('express');
var router = express.Router();

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