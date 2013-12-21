/**
 * Module dependencies.
 */

var express = require('express');
//var routes = require('./routes');
var user = require('./routes/user');
var authenticate = require('./routes/authenticate');
var http = require('http');
//var path = require('path');

var app = express();
var config = null, passport= null;

// express settings
require('./config/express')(app, config)

// bootstrap routes
require('./config/routes')(app, passport)

// Start the app by listening on <port>
var port = process.env.PORT || 3000
app.listen(port)

console.log('Express app started on port ' + port)

// expose app
exports = module.exports = app


//http.createServer(app).listen(app.get('port'), function () {
//    console.log('Express server listening on port ' + app.get('port'));
//});
