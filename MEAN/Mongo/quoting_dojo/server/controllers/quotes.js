var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');

module.exports = {

  show: function(req, res){
    Quote.find({}, function (err, quotes) {
      res.render("quotes", {data:quotes});
    }).sort({"updated_at": -1});
  },

  create: function(req, res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
      if (err) {
        console.log("something went wrong");
      } else {
        console.log('succesfully added quote!');
        res.redirect('/showQuotes');
      }
    })
  }

}
