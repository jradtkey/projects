var UserController = require('./../controllers/controllers.js');

module.exports = function(app) {

  app.post('/createusers', (req, res, next) => {
    UserController.createUser(req,res);
  });

  app.post('/createPuppy', (req, res, next) => {
    console.log("creating puppy in ROUTES");
    UserController.createPuppy(req,res);
  });

  app.post('/updatePuppy', (req, res, next) => {
    console.log("inside routes", req.body);
    UserController.updatePuppy(req,res);
  });

  app.post('/delete', (req, res, next) => {
    UserController.delete(req,res);
  });

  app.get('/users', UserController.index);

  app.get('/userID', UserController.index);

  app.get('/posts', UserController.posts);

  app.post('/user', (req, res, next) => {
    UserController.user(req,res);
  });

}
