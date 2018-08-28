/**
 * User.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const bcrypt = require('bcrypt-nodejs');

module.exports = {
  attributes: {
    email: { type: 'string', columnName: 'email', required: true, unique: true },
    username: { type: 'string', columnName: 'username', required: true, unique: true },
    password: { type: 'string', columnName: 'password', required: true }
  },
  customToJSON: function () {
    return _.omit(this, ['password'])
  },
  beforeCreate: function (user, cb) {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.password, salt, null, function (err, hash) {
        if (err) return cb(err);
        user.password = hash;
        return cb();
      });
    });
  }
};

//Test URL to create user
//http://127.0.0.1:1337/user/create?username=bruno&password=infected&email=bruno.delattre@linkt.fr

//http://127.0.0.1:1337/login?username=bruno&password=infected



