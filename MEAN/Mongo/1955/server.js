var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./static")));


mongoose.connect('mongodb://localhost/1955');
mongoose.Promise = global.Promise;

var User = new mongoose.Schema({
  name: {type: String}
});

mongoose.model('user', User);

var User = mongoose.model('user');



app.get('/', function(req, res) {
  var users = User.find({}, function (err, data){
    if (err) {
      res.json(err);
      return;
    }
    res.json(data)
  });
})

app.get('/new/:name/', function(req, res){
  var user = new User({name: req.params.name});
  user.save(function (err, aUser) {
    if (err) {
      res.json(err);
      return;
    }
    res.json(aUser);
  })
})

app.get('/remove/:name/', function(req, res){
  User.remove({name: req.params.name}, function(err, aUser){
    if (err) {
      res.json(err);
      return;
    }
    res.json(aUser);
  });
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
