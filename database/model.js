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

module.exports = {
    TypeUser: require('./models/typeuser').TypeUser(),

    User: require('./models/user').User(),

    Topic: require('./models/topic').Topic(),

    UserTopic: require('./models/usertopic').TopicUser(),

    UserContact: require('./models/usercontact').UserContact(),

    Message: require('./models/message').Message()
};
