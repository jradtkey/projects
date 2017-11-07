var mongoose = require('mongoose');

var Schema = new mongoose.Schema;

var NoteSchema = new mongoose.Schema({
//  content: String,
 content: { type: String, required: true, minlength: 3},
 created_at: Date
})
mongoose.model('Notes', NoteSchema);
