var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {

  index: function(req, res) {
    Poll.find({}, function(err, polls) {
      console.log("polls - show");
      res.json({'polls': polls});
    })
  },

  getPoll: function(req, res) {
    var id = req.body.id
    console.log(req.body.id);
    Poll.findOne({_id:id}, function(err, poll) {
      res.json({'poll': poll});
    })
  },

  create: function(req, res) {
    console.log("polls - create");
    console.log(req.body);
    var poll = new Poll({
      user: req.body.user,
      question: req.body.question,
      option1: req.body.option1,
      votes1: req.body.votes1,
      option2: req.body.option2,
      votes2: req.body.votes2,
      option3: req.body.option3,
      votes3: req.body.votes3,
      option4: req.body.option4,
      votes4: req.body.votes4,
      created_at: new Date()
    });
    poll.save(function(err){
      if(err){
        console.log(err);
      }
    })
    console.log(poll);
    console.log("saved");
  }

}
