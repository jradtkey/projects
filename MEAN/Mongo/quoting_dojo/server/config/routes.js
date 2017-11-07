var quotes = require('../controllers/quotes.js');
module.exports = function(app){

  app.get('/', function(req, res) {
    res.render("index");
  })

  app.post('/quotes', function(req, res){
    quotes.create(req, res);
  })

  app.get('/showQuotes', function (req, res) {
    quotes.show(req, res);
  })


}
