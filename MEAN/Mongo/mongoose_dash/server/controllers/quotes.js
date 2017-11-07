var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports = {

  home: function (req, res) {
    console.log("POST DATA", req.body);

    Animal.find({}, function(err,animals){
      res.render("index", {data:animals});
    })
  },

  create: function (req, res) {
    var animal = new Animal({name: req.body.name});
    animal.save(function (err) {
      if (err) {
        console.log(err);
        console.log("didn't work, you loser");
      } else {
        console.log("you finally did something right. data added!");
        res.redirect('/');
      }
    })
  },

  show: function (req, res) {
    console.log("POST DATA", req.params.id);
    Animal.find({_id: req.params.id}, function(err,animals){
      if (err) { console.log(err); }
      res.render("single", {data:animals[0]});
    })
  },

  update: function (req, res) {
    Animal.findOne({_id: req.params.id}, function(err,animals){
      if (err) { console.log(err); }
      animals.name = req.body.name;
      animals.save();
      res.redirect('/');
    })
  },

  destroy: function (req, res) {
    Animal.remove({_id: req.params.id}, function (err) {
      if (err) {
        return handleError(err);
      }
    })
    res.redirect('/');
  }

}
