
/*
 * GET home page.
 */
var utils = require('../lib/util');

exports.index = function(req, res){

    utils.logHttpHeaders(req, true);
    res.render('index', { title: 'Express' });
};