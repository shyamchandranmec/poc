/**
 * Created by shyam on 19/09/15.
 */

var sessionHandler = require("../auth/sessionhandler");

module.exports = function (req, res, next) {
    var url = req.url;
    if(!(url.indexOf("/login")  == 0))   {
        if((!sessionHandler.getSessionUserDetails(req))) {
            res.redirect('/login');
        } else {
            next();
        }
    } else {
        next();
    }
}