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
    User.findOne({user_id: req.body.user_id}, function(err, post){
      var puppy = new Puppy(req.body);
      puppy._user = req.body.user_id;
      console.log("POST STUFF", post);

      puppy.save(function(err){
          post.puppies.push(puppy);
          post.save(function(err){
            if (err) {
              console.log("Unable to save puppy");
            }
            else {
              console.log("Saved puppy");
            }
          })
      })

    })
    // var puppy = new Puppy({
    //   image: req.body.image,
    //   name: req.body.name,
    //   description: req.body.descrtiption,
    //   price: req.body.price,
    //   location: req.body.location,
    // })
    // puppy.save(function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    // })
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

  }
