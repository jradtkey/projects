var Users = require('../controllers/users.js');

module.exports = function (app) {


  app.get('/', (req, res) => {
    console.log("express route working");
    Users.index(req, res);
  })

  app.post('/users', (req, res, next)=>{
   console.log("success", req.body);
   users.create(req, res);
  })

}
