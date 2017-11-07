var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {

  index: function(req, res) {
    Question.find({}, function(err, questions) {
      res.json({'questions': questions});
    })
  },

  create: function(req, res) {
    var question = new Question({
      question: req.body.question,
      description: req.body.description,
    });
    question.save(function(err){
      if(err){
        console.log(err);
      }
    })
    console.log("saved", question);
  },

  getQuestion: function(req, res) {
    var id = req.body.id
    console.log(req.body.id);
    Question.findOne({_id:id}, function(err, question) {
      res.json({'question': question});
    })
  },

  add: function(req, res) {

    Question.findOne({_id: req.body.questionID}, function(err, post){

      var answer = new Answer(req.body);
      answer._question = req.body.questionID;
      console.log("this is the question after the answer was added", post);
      answer.save(function(err){
              post.answers.push(answer);
              post.save(function(err){
                   if(err) {
                        console.log('Error');
                   } else {
                        console.log("Added answer to question");
                   }
               });
      });
    });

  },

}
