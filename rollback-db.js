var db = require('./database/model');


db.TypeUser.sync();

db.User.sync();
db.Topic.sync();
db.UserTopic.sync();
db.UserContact.sync();
db.Message.sync();
