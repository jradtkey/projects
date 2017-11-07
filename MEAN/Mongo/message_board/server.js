var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [6, 10000000],
    message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(session({
  secret: 'codingdojorocks',
  resave: true,
  saveUninitialized: true
}));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/message_board');
mongoose.Promise = global.Promise;

var Schema = mongoose.Schema;

var MessageSchema = new mongoose.Schema({
  content: {type: String, required: true},
  name: {type: String, required: true, minlength: 4},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
}, {timestamps: true });


var CommentSchema = new mongoose.Schema({
  _message: {type: Schema.Types.ObjectId, ref: 'Message'},
  name: {type: String, required: true, minlength: 4},
  content: {type: String, required: true},
}, {timestamps: true});

mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');


app.get('/', function(req, res) {


  Message.find({}).sort({createdAt: -1}).populate('comments').exec(function(err, message) {
    if (err) {
      res.redirect('/');
    } else {
      res.render('index', {data: message});
    }
       });

})

app.post('/addMessage', function(req, res){


  var message = new Message({content: req.body.message, name: req.body.name});

  message.save(function (err) {

    if (err) {
      console.log(nameValidator);
      console.log("didn't work, you loser");
    } else {
      console.log("you finally did something right. data added!");
      res.redirect('/');
    }
  })
})

app.post('/addComment/:id', function(req, res){
  Message.findOne({_id: req.params.id}, function (err, message) {
    var comment = new Comment(req.body);
    comment._message = message._id;
    message.comments.push(comment);
    comment.save(function (err) {
      console.log(err);
      message.save(function (err) {
        if (err) {
          console.log('Didnt work');
        }
        else {
          console.log('Success!');
          res.redirect('/')
        }
      })
    })
  })

})



app.listen(8000, function() {
 console.log("listening on port 8000");
})
