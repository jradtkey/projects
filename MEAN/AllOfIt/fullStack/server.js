var express = require("express");
const path = require('path');
var app = express();
const bodyParser = require('body-parser');
var mongoose = require('mongoose');



// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/testFull/dist")));

require("./config/mongoose_setup.js");
require("./config/routes.js")(app);


module.exports = function(app){
    app.get('/', users.index);
    app.post('/users', users.create);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./testFull/dist/index.html"))
    });
}


// app.set('views', path.join(__dirname, './views'));
// app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;



app.listen(8000, function() {
 console.log("listening on port 8000");
});
