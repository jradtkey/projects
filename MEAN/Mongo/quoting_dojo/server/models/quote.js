var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 2},
 quote: { type: String, required: true, minlength: 2},
 updated_at: { type: Date, default: Date.now }
})
mongoose.model('Quote', QuoteSchema);
