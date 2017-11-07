var mongoose = require('mongoose');

var PollSchema = new mongoose.Schema({
  user: {type: String, required: true},
  question: {type: String, required: true},
  option1: {type: String, required: true},
  votes1: {type: Number},
  option2: {type: String, required: true},
  votes2: {type: Number},
  option3: {type: String, required: true},
  votes3: {type: Number},
  option4: {type: String, required: true},
  votes4: {type: Number},
})

var User = mongoose.model('Poll', PollSchema);
