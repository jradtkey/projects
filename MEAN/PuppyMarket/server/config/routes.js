var UserController = require('./../controllers/controllers.js');

module.exports = function(app) {

  app.post('/createusers', (req, res, next) => {
    UserController.create(req,res);
  });

  app.post('/createPuppy', (req, res, next) => {
    UserController.createPuppy(req,res);
  });

  app.get('/users', UserController.index);

  app.get('/posts', UserController.posts);

  app.post('/user', (req, res, next) => {
    UserController.user(req,res);
  });

}
