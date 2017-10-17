const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Message : function () {
        return sequelize.define('messages', {
                dateCreation: {
                    type: Sequelize.DATE
                },
                text: {
                    type: Sequelize.STRING
                },
                idAuthor: {
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
                }
            },
            {
                timestamps: false
            });
    }
};