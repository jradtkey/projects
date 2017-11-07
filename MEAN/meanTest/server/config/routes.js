var QuestionController = require('./../controllers/QuestionController.js')

module.exports = function(app) {

  app.post('/questions', (req, res, next)=>{
    console.log("questions route created", req.body);
    QuestionController.create(req, res);
  });

  app.get('/questions', (req, res, next)=>{
    console.log("looking for quesitons")
    QuestionController.index(req, res)
  });

  app.get('/showquestions', (req, res, next)=>{
    QuestionController.index(req, res)
    console.log("HEYYYYYY", req.body)
  });

  app.post('/question', (req, res, next)=>{
    console.log("HEYYYYYY")
    QuestionController.getQuestion(req, res)
  });

  app.post('/answers', (req, res, next)=>{
    QuestionController.add(req, res);
  });


  app.all("*", (req, res, next) =>{
    res.sendFile(path.resolve(".public/dist/index.html"))
  });
}
