var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema({
 name: { type: String, required: true, minlength: 6},
 age: { type: Number, min: 1, max: 150},
})
mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User')


app.get('/', function(req, res) {

  User.find({}, function(err, users){
    res.render("index", {data:users});
  })

})

app.post('/users', function(req, res){
  console.log("POST DATA", req.body);

  var user = new User({name: req.body.name, age: req.body.age});

  user.save(function(err){

    if (err) {
      console.log("something went wrong");
    } else {
      console.log('succesfully added user!');
      res.redirect('/');
    }

  })
})




app.listen(8000, function() {
 console.log("listening on port 8000");
})
