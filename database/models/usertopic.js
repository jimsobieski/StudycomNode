const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

var User = require('./user').User();
var Topic = require('./topic').Topic();


module.exports = {
    TopicUser : function () {
        return sequelize.define('topicuser', {
                idTopic: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    references : {
                        model: require('./topic').Topic(),
                        key: 'id'
                    }
                },
                idUser: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
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


User.belongsToMany(Topic, { through: 'topicuser', foreignKey: 'idUser'});
Topic.belongsToMany(User, { through: 'topicuser', foreignKey: 'idTopic'});