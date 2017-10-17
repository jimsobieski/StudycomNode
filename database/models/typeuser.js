const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = {
    TypeUser : function () {
        return sequelize.define('typeuser', {
                type: {
                    type: Sequelize.STRING
                },
            },
            {
                timestamps: false,
                tableName: 'typeuser',
                paranoid: false
            });
    }
};