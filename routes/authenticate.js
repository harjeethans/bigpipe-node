/**
 * Created by harjeesi on 12/19/13.
 */
exports.authenticate = function(req, res){
    /*
    res.set({
        'Transfer-Encoding': 'chunked',
        'Application-Name': 'Cisco Security'
    })
    */
    console.log('harjeesi::' + req.originalUrl);
    var _ourl = req.originalUrl + "";
    res.set({
        'Transfer-Encoding': 'chunked',
        'Application-Name': 'Cisco Security'
    });
    if(_ourl.indexOf("register")>0){
        res.render('register', { title: 'Register'});
    } else {
        res.render('authenticate', { title: 'Authenticate'});
    }
};