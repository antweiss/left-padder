
var express = require('express');
var routes = require('./routes');
var api = require('./routes/api');
var http = require('http');
var path = require('path');
var methodOverride = require('method-override');
//var session = require('express-session');
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(methodOverride());
// app.use(session({ resave: true,
//                   saveUninitialized: true,
//                   secret: 'uwotm8' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', routes.index);
app.post( '/leftpad', routes.leftpad );
app.post( '/leftpad-api', api.leftpad );

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server now listening on port ' + app.get('port'));
});
