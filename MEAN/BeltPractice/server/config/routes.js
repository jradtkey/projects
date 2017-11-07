var polls_controller = require('../controllers/polls.js')

module.exports = function(app) {

  app.get('/poll', (req,res, next) => {
    console.log("OBOBOBOBOBOBOB");
    polls_controller.create(req,res)
  });

}
