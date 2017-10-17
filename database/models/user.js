const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    User : function () {
        return sequelize.define('users', {
                login: {
                    type: Sequelize.STRING
                },
                name: {
                    type: Sequelize.STRING
                },
                email: {
                    type: Sequelize.STRING
                },
                password: {
                    type: Sequelize.STRING
                },
                idtype: {
                    type: Sequelize.INTEGER,

                    references : {
                        model: require('./typeuser').TypeUser(),
                        key: 'id'
                    }
                }
            },
            {
                timestamps: false
            });
    }
};