var mongoose = require('mongoose');
var passwordHash = require('password-hash');
var User = mongoose.model('User');
var Puppy = mongoose.model('Puppy');

module.exports = {

  create: function (req, res) {
    var password = passwordHash.generate(req.body.password);
    var user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: password
    })
    // user.save(function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    // })
  },

  createPuppy: function (req, res) {
    console.log(req.body);
    User.findOne({_id: req.body.puppy.user_id}, function(err, post){
      var puppy = new Puppy({image: req.body.puppy.image, name: req.body.puppy.name, description: req.body.puppy.description, price: req.body.puppy.price, location: req.body.puppy.location});
      puppy._user = req.body.puppy.user_id;
      console.log("POST STUFF", puppy);

      post.puppies.push(puppy);
      puppy.save(function(err){
        if (err) {
          console.log("Puppy error is", err);
        }
        else {
          post.save(function(err){
            if (err) {
              console.log("Unable to save puppy");
            }
            else {
              console.log("Saved puppy");
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
        console.log("PUPPIES");
      })
    },

    user: function(req, res) {
      var password = passwordHash.generate(req.body.password)
      // console.log(password);
      // console.log("PASSWORD", passwordHash.verify(req.body.password, password));
      User.find({email: req.body.email}, function(err, user) {
        console.log(user);
        if (passwordHash.verify(req.body.password, user[0].password)) {
          console.log("VERIFIED");
          res.json({'user': user});
        }
        else {
          console.log("NOT VERIFIED");
          res.json({'user': []});
        }
      })
    },

    updatePuppy: function(req, res) {
      console.log("inside controllers", req.body);
      Puppy.findOne({_id: req.body.id}, function(err, puppy){
        puppy.image = req.body.puppy.image,
        puppy.name = req.body.puppy.name,
        puppy.description = req.body.puppy.description,
        puppy.price = req.body.puppy.price,
        puppy.location = req.body.puppy.location,
        puppy.save(function(err){
          console.log(err);
        });
      });
    },

    delete: function(req, res) {
      console.log("inside controllers", req.body);
      Puppy.remove({_id: req.body.id}, function(err){
        console.log(err);
      });
    },

  }
