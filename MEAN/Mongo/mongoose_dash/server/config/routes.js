var quotes = require('../controllers/quotes.js');
module.exports = function (app) {

//home
  app.get('/', function(req, res) {
    quotes.home(req, res);
  })

  app.get('/new', function (req, res) {
    res.render("form");
  })

  app.post('/mongooses/new', function(req, res){
    quotes.create(req,res);
  })

  app.get('/mongooses/:id', function(req, res) {
    quotes.show(req,res);
  })

  app.get('/mongooses/edit/:id', function(req, res) {
    res.render("edit", {data:req.params.id});
  })

  app.post('/mongooses/update/:id', function (req, res) {
    quotes.update(req, res);
  })

  app.get('/mongooses/destroy/:id', function(req, res) {
    quotes.destroy(req, res);
  })

}
