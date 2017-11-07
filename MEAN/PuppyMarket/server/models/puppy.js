var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PuppySchema = new mongoose.Schema({
  image: {type: String},
  name: {type: String, required: true},
  descritption: {type: String, required: true},
  price: {type: Number, required: true},
  location: {type: String, required: true},
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
})

var Puppy = mongoose.model('Puppy', PuppySchema);
