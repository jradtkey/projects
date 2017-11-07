var usersController = require('./../controllers/users.js');
var pollsController = require('./../controllers/polls.js')

module.exports = function(app) {

  // app.get('/users', (req, res, next)=>{
  //   console.log("inside user route")
  //   usersController.index(req, res)
  // });

  app.get('/polls', (req, res, next)=>{
    console.log("express get route is working - poll")
    pollsController.index(req, res)
  });

  app.post('/poll', (req, res, next)=>{
    console.log("HEYYYYYY")
    pollsController.getPoll(req, res)
  });

  app.post('/users', (req, res, next)=>{
    console.log("node - users route created");
    console.log(req.body)
    usersController.create(req, res);
  });

  app.post('/polls', (req, res, next)=>{
    console.log("node - polls route created");
    console.log("BBBBBBBBB",req.body)
    pollsController.create(req, res);
  });

  app.all("*", (req, res, next) =>{
    res.sendFile(path.resolve(".public/dist/index.html"))
  });
}
