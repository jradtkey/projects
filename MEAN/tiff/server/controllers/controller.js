var mongoose = require('mongoose');
var Product1 = mongoose.model('Product1');

module.exports = {

  createBid: function(req, res) {
    var product1 = new Product1({
      name: req.body.name,
      bid: req.body.bid,
    });
    product1.save(function(err){
      if(err){
        console.log(err);
      }
    })
    console.log("saved");
  },

  index: function(req, res) {
    Product1.find({}, function(err, bids) {
      res.json({'bids': bids});
    })
  },

  delete: function (req, res) {
    console.log("delete");
    Product1.remove({}, function(err) {
    })
  }

}
