var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  email: {type: String, required: true},
  updated_at: {type: Date, default: Date.now}
})

var Animal = mongoose.model('Animal', AnimalSchema);
