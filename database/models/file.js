const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    File : function () {
        return sequelize.define('files', {
                dateCreation: {
                    type: Sequelize.DATE
                },
                name: {
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