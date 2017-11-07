var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new mongoose.Schema({
  user: {type: String},
  _question: {type: Schema.Types.ObjectId, ref: 'Question'},
  answer: {type: String, required: true},
  details: {type: String},
  likes: {type: Number},
  questionID: {type:String}
})

var Answer = mongoose.model('Answer', AnswerSchema);
