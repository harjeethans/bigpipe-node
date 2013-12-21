/**
 * Created by harjeesi on 12/20/13.
 */

var routes = require('../routes/');
var authenticate = require('../routes/authenticate');
var user = require('../routes/user');


module.exports = function (app, passport) {

    app.get('/', routes.index);
    app.get('/login', authenticate.authenticate);
    app.get('/register', authenticate.authenticate);
    app.get('/users', user.list);
}
