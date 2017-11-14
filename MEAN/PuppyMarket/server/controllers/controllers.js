var mongoose = require('mongoose');
var passwordHash = require('password-hash');
var User = mongoose.model('User');
var Puppy = mongoose.model('Puppy');

module.exports = {

  createUser: function (req, res) {
    var password = passwordHash.generate(req.body.password);
    var user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: password
    })
    user.save(function (err) {
      if (err) {
        console.log(err);
          res.json({err:"error"});
      }
      else {
        res.json({saved: "save"})
      }
    })
  },

  createPuppy: function (req, res) {
    User.findOne({_id: req.body.puppy.user_id}, function(err, post){
      var puppy = new Puppy({image: "", name: req.body.puppy.name, description: req.body.puppy.description, price: req.body.puppy.price, location: req.body.puppy.location});
      puppy._user = req.body.puppy.user_id;
      console.log("CONTROLLER", puppy);

      post.puppies.push(puppy);
      puppy.save(function(err){
        if (err) {
          res.json({err:err});
        }
        else {
          post.save(function(err){
            if (err) {
              console.log("Unable to save puppy");
              res.json({err:err});
            }
            else {
              res.json({success:"success"});
            }
          })
        }
      })

    })
  },

    index: function(req, res) {
      User.find({}, function(err, users) {
        res.json({'users': users});
      })
    },

    posts: function(req, res) {
      Puppy.find({}, function(err, puppies) {
        res.json({'puppies': puppies});
      })
    },

    user: function(req, res) {
      var password = passwordHash.generate(req.body.password)

      User.find({email: req.body.email}, function(err, user) {
        console.log(user);
        if (passwordHash.verify(req.body.password, user[0].password)) {
          res.json({'user': user});
        }
        else {
          res.json({'user': []});
        }
      })
    },

    updatePuppy: function(req, res) {
      console.log("inside controllers - UPDATE", req.body);
      Puppy.findOne({_id: req.body.id}, function(err, puppy){
        puppy.image = "img",
        puppy.name = req.body.puppy.name,
        puppy.description = req.body.puppy.description,
        puppy.price = req.body.puppy.price,
        puppy.location = req.body.puppy.location,
        puppy.save(function(err){
          if (err) {
            res.json({err:err})
          }
          else {
            res.json({updated:"updated"})
          }
        });
      });
    },

    delete: function(req, res) {
      console.log("inside controllers - DELETE", req.body);
      var puppies = []
      User.findOne({_id:req.body.userID}, function (err, user) {
        for (var i = 0; i < user.puppies.length; i++) {
          if (user.puppies[i] == req.body.id) {
            console.log("Found index:", i);
            puppies = user.puppies.splice(i, 1);
          };
        }
        console.log("puppies array:", user.puppies);
        user.save(function (err) {
          // if (err) {
          //   res.json({err:err})
          // }
          // else {
          //   res.json({delete:"deleted"})
          // }
        })
      });

      Puppy.remove({_id: req.body.id}, function(err){
        if (err) {
          res.json({err: err})
        }
        else {
          res.json({removed:"removed"})
        }
      });
    },

  }
