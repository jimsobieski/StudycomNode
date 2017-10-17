const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


module.exports = {
    TopicUser : function () {
        return sequelize.define('topicuser', {
                idTopic: {
                    type: Sequelize.INTEGER,
                    references : {
                        model: require('./topic').Topic(),
                        key: 'id'
                    }
                },
                idUser: {
                    type: Sequelize.INTEGER,
                    references : {
                        model: require('./user').User(),
                        key: 'id'
                    }
                }
            },
            {
                timestamps: false,
                tableName: 'topicuser'
            });
    }
};

var User = require('./user').User();
var Topic = require('./topic').Topic();
User.belongsToMany(Topic, { through: 'topicuser'});
Topic.belongsToMany(User, { through: 'topicuser'});