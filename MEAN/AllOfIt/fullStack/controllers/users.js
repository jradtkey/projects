var mongoose = require('mongoose')
var User = mongoose.model('User')

module.exports = {

  index: function(req, res){
    User.find({}, function (err, data) {
      if (err) {
        res.json (err);
        return;
      }
      res.json({'users': data});
    });
  },

  create: function (req, res) {
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err) {
      // if there is an error console.log that something went wrong!
      if(err) {
        res.json(err);
        return;
      } else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.json({user: user});

      }
    })
  }

}
