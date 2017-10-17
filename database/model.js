const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

var TypeUser  = require('./models/typeuser').TypeUser();
var User  = require('./models/user').User();
var Topic  = require('./models/topic').Topic();
var UserTopic  = require('./models/usertopic').TopicUser();
var UserContact  = require('./models/usercontact').UserContact();
var Message  = require('./models/message').Message();

TypeUser.sync();
User.sync();
Topic.sync();
UserTopic.sync();
UserContact.sync();
Message.sync();

