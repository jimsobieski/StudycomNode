var db = require('./database/model');


db.TypeUser.sync().then(function() {
    db.User.sync().then(function() {
        db.Topic.sync().then(function() {
            db.UserTopic.sync().then(function() {
                db.UserContact.sync().then(function() {
                    db.Message.sync();
                })
            })
        });
    });
});





