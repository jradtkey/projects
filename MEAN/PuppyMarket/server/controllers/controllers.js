var mongoose = require('mongoose');
var passwordHash = require('password-hash');
var User = mongoose.model('User');

module.exports = {

  create: function (req, res) {
    var password = passwordHash.generate(req.body.password);
    var user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: password
    })
    // user.save(function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    // })
  },

    index: function(req, res) {
      User.find({}, function(err, users) {
        res.json({'users': users});
      })
    },

    user: function(req, res) {
      var password = passwordHash.generate(req.body.password)
      console.log(password);
      console.log("PASSWORD", passwordHash.verify(req.body.password, password));
      User.findOne({password: password}, function(err, user) {
        res.json({'user': user});
      })
    },

  }
