var bcrypt = require('bcrypt-nodejs');
var TypeUser = require('./models/typeuser').TypeUser();
var User = require('./models/user').User();
var Topic = require('./models/topic').Topic();
var TopicUser = require('./models/usertopic').TopicUser();
var UserContact = require('./models/usercontact').UserContact();
console.log(module.User);
//FEED TYPEUSERS
TypeUser.create({type: 'Etudiant'});
TypeUser.create({type: 'Professeur'});

//FEED USERS
User.create({
    login: 'Beu Beu',
    name: 'Benoit',
    email: 'benoitvachonne@yopmail.com',
    password: bcrypt.hashSync('studycom'),
    idtype: 1
});
User.create({
    login: 'Joe Biceps',
    name: 'Jonnhy',
    email: 'jojo@yopmail.com',
    password: bcrypt.hashSync('studycom'),
    idtype: 1
});
User.create({
    login: 'Jim Sobieski',
    name: 'Jim',
    email: 'jims@yopmail.com',
    password: bcrypt.hashSync('studycom'),
    idtype: 1
});


//FEED TOPICS
Topic.create({
    nom: 'Maths',
    idAdmin: 1
});
Topic.create({
    nom: 'Architecture SI',
    idAdmin: 2
});
Topic.create({
    nom: 'Conception Objet',
    idAdmin: 3
});
Topic.create({
    nom: 'User contact 1',
    idAdmin: 1
});


//FEED USERTOPIC
TopicUser.create({
    idUser:1,
    idTopic: 1
});
TopicUser.create({
    idUser:1,
    idTopic: 2
});
TopicUser.create({
    idUser:2,
    idTopic: 2
});
TopicUser.create({
    idUser:3,
    idTopic: 3
});

//FEED USERCONTACT
UserContact.create({
    user1: 1,
    user2: 2,
    idTopic: 4,
    valid: 0
});

//FEED MESSAGE