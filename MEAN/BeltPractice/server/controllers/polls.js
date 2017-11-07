var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {

  index: function(req, res) {
    console.log("hello");
    User.find({}, function(err, notes) {
      res.json({'polls': polls});
    })
  },

  create: function(req, res) {
      var poll = new Poll({
        user: "some name",
        question: req.body.question,
        option1: req.body.option1,
        votes1: 0,
        option2: req.body.option2,
        votes2: 0,
        option3: req.body.option3,
        votes3: 0,
        option4: req.body.option4,
        votes: 0
      });
      poll.save(function(err) {
        if(err){
          console.log("something went wrong");
        } else {
          res.redirect('/');
        }
      })
    }
}
