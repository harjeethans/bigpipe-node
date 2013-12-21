/**
 * Created by harjeesi on 12/20/13.
 * Utility stuff here
 */

var _ = require('underscore');

exports.logHttpHeaders = function (reqOrRes, pritty) {
    console.log('Logging http headers::');
    if(pritty){
        var _h = reqOrRes.headers;
        var _keys = _.keys(_h);
        _.each(_keys, function(element, index, list){
            console.log(element + ': ' + _h[element]);
        });

    } else {
        console.log(_.pairs(reqOrRes.headers));
    }

}
