var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
  question: {type: String, required: true},
  description: {type: String},
  answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})

var Question = mongoose.model('Question', QuestionSchema);
