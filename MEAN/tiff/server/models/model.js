var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product1Schema = new mongoose.Schema({
  name: {type: String, required: true},
  bid: {type: Number}
})

var Product1 = mongoose.model('Product1', Product1Schema);
