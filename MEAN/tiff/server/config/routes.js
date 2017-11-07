var Product1Controller = require('./../controllers/controller.js')

module.exports = function (app) {

  app.post('/product1', (req, res, next) => {
    Product1Controller.createBid(req,res);
  });

  app.get('/bids', Product1Controller.index);

  app.get('/delete', Product1Controller.delete);

  app.all("*", (req, res, next) =>{
    res.sendFile(path.resolve(".public/dist/index.html"))
  });
}
