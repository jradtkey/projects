var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {

  index: function(req, res) {
    User.find({}, function(err, users) {
      res.json({'users': users});
    })
  },

  create: function(req, res) {
    console.log("user express create method");
    console.log(req.body);
    // var user = new User({
    //   user: req.body.user,
    //   created_at: new Date()
    // });
    // user.save(function(err){
    //   if(err){
    //     console.log(err);
    //   }
    // });
    console.log("save");
    // console.log(user);
  }
}
