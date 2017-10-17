const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    UserContact : function () {
        return sequelize.define('usercontact', {
                user1: {
                    type: Sequelize.INTEGER,
                    references : {
                        model: require('./user').User(),
                        key: 'id'
                    }
                },
                user2: {
                    type: Sequelize.INTEGER,
                    references : {
                        model: require('./user').User(),
                        key: 'id'
                    }
                },
                idTopic: {
                    type: Sequelize.INTEGER,
                    references : {
                        model: require('./topic').Topic(),
                        key: 'id'
                    }
                },
                valid: {
                    type: Sequelize.BOOLEAN
                }
            },
            {
                timestamps: false,
                tableName: 'usercontact',
            });
    }
};