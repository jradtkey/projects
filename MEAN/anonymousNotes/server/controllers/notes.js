var mongoose = require('mongoose');
var Note = mongoose.model('Notes');

module.exports = {

  index: function(req, res) {
    Note.find({}, function(err, notes) {
      res.json({'notes': notes});
    })
  },

  create: function (req, res) {
    console.log(req.body);
    res.json();
  }

}
