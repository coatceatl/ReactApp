const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/reactApp', {
  useMongoClient: true,
});
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  googleId: String
});

//module.exports = mongoose.model('users', userSchema);

const User = mongoose.model('User', userSchema);

//module.exports = mongoose.model('User', UserSchema);

module.exports = User;
