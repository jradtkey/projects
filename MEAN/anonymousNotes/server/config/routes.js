var notes_controller = require('../controllers/notes.js')

module.exports = function(app){

  app.get('/notes', (req, res, next)=>{
    console.log("express get route is working")
    notes.index(req, res)
  });

  app.post('/notes', notes_controller.create);

}
