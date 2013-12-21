
/**
 * Module dependencies.
 */

var express = require('express')
var path = require('path');
var rootPath = path.normalize(__dirname + '/..');

module.exports = function (app, config) {

    // all environments
    app.set('port', process.env.PORT || 3000);
    app.set('views', path.join(rootPath, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded());
    app.use(express.methodOverride());
    app.use(express.cookieParser('your secret here'));
    app.use(express.session());
    app.use(app.router);
    app.use(express.static(path.join(rootPath, 'public')));

    // development only
    if ('development' == app.get('env')) {
        app.use(express.errorHandler());
    }

    // development env config
    app.configure('development', function () {
        app.locals.pretty = true
    })
}
