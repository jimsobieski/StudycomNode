var db = require('./database/model');


db.TypeUser.sync().then(function() {
    db.TypeUser.create({
        type: 'etudiant'
    });
    db.TypeUser.create({
        type: 'professeur'
    });
    db.User.sync().then(function() {
        db.User.create({
            login: 'jimmy',
            name: 'jim',
            email: 'sobieskimail@yopmail.com',
            password: 'studycom',
            idtype: 1
        });
        db.User.create({
            login: 'bobby',
            name: 'bob',
            email: 'bobby@yopmail.com',
            password: 'studycom',
            idtype: 1
        });
        db.Topic.sync().then(function() {
            db.Topic.create({
                nom: 'Histoire',
                dateCreation: new Date(),
                idAdmin: 1
            });
            db.Topic.create({
                nom: 'Maths',
                dateCreation: new Date(),
                idAdmin: 2
            });
            db.Topic.create({
                nom: 'Programmation',
                dateCreation: new Date(),
                idAdmin: 1
            });
            db.UserTopic.sync().then(function() {
                db.UserTopic.create({
                    idTopic: 1,
                    idUser: 1
                });
                db.UserTopic.create({
                    idTopic: 1,
                    idUser: 2
                });
                db.UserTopic.create({
                    idTopic: 2,
                    idUser: 1
                });
                db.UserTopic.create({
                    idTopic: 2,
                    idUser: 2
                });
                db.UserTopic.create({
                    idTopic: 3,
                    idUser: 1
                });
                db.UserContact.sync().then(function() {
                    db.Message.sync();
                })
            })
        });
    });
});





