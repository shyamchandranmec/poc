/**
 * Created with IntelliJ IDEA.
 * User: shyam
 * Date: 21/2/15
 * Time: 12:13 PM
 * To change this template use File | Settings | File Templates.
 */

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var logger = require("log4js").getLogger();

var userService = require("../services/userService");

passport.use(new LocalStrategy({usernameField: "email"}, function (email, password, done) {
     var email = email;
    userService.findUserByEmail(email)
        .then(function (user) {
            done(null, user)
        }).fail(function (err) {
            if (err) {
                logger.error(err);
                done(null, false)
            } else if (err == null) {
                done(null, false,{message: 'Incorrect username or password'});
            }
        })
}));


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user)
});