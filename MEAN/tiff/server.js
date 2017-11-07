var express = require('express');
var app = express();
const path = require('path');
const bodyParser = require('body-parser');


//Settings

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//public refers to the angular folder app, it is common to call the angular app folder public
app.use(express.static(path.join(__dirname, '/public/dist')));



require('./server/config/mongoose.js');


//ROUTES
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);

app.listen(8000, function() {
 console.log("listening on port 8000");
});
