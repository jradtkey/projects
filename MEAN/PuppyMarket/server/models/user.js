var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  puppies: [{type: Schema.Types.ObjectId, ref: 'Puppy'}]
})

var User = mongoose.model('User', UserSchema);
