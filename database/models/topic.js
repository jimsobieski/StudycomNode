const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    Topic : function () {
        return sequelize.define('topic', {
                dateCreation: {
                    type: Sequelize.DATE
                },
                nom: {
                    type: Sequelize.STRING
                },
                idAdmin: {
                    type: Sequelize.INTEGER,

                    references : {
                        model: require('./user').User(),
                        key: 'id'
                    }
                }
            },
            {
                timestamps: false
            });
    }
};