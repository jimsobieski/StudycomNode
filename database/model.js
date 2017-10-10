var bcrypt = require('bcrypt-nodejs');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('studycom', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const TypeUser = sequelize.define('typeuser', {
        type: {
            type: Sequelize.STRING
        },
    },
    {
        timestamps: false,
        tableName: 'typeuser',
        paranoid: false
    });

const User = sequelize.define('users', {
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
            type: Sequelize.INTEGER
        },
    },
    {
        timestamps: false
    });

User.sync({force: false}).then(() =>{
    return User.create({
    name: 'joe le triso',
    login: 'jojovatard',
    email: 'jojovatatrd@yopmail.com',
    password: bcrypt.hashSync('yolo'),
    idtype: 1,
})
});


const Topic = sequelize.define('topic', {
        dateCreation: {
            type: Sequelize.DATE
        },
        nom: {
            type: Sequelize.STRING
        },
        idAdmin: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false
    });

const UserTopic = sequelize.define('usertopic', {
        idUser: {
            type: Sequelize.INTEGER
        },
        idAdmin: {
            type: Sequelize.INTEGER
        }
    },
    {
        timestamps: false,
        tableName: 'usertopic',
    });

const Message = sequelize.define('messages', {
    dateCreation: {
        type: Sequelize.DATE
    },
    text: {
        type: Sequelize.STRING
    },
    idAuthor: {
        type: Sequelize.INTEGER
    },
    idTopic: {
        type: Sequelize.INTEGER
    }
},
    {
        timestamps: false
    });

const UserContact = sequelize.define('usercontact', {
        user1: {
            type: Sequelize.INTEGER
        },
        user2: {
            type: Sequelize.INTEGER
        },
        idTopic: {
            type: Sequelize.INTEGER
        },
        valid: {
            type: Sequelize.BOOLEAN
        }
    },
    {
        timestamps: false,
        tableName: 'usercontact',
    });
console.log(UserContact);




