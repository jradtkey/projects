var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  user: {type: String, required: true},
  created_at: Date
})

var User = mongoose.model('User', UserSchema);
