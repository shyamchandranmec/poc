/**
 * Created by shyam on 06/02/16.
 */

"use strict"
let riot = require("riot");
let loginPage = require("../tags/login-page.tag");
let staticPageOne = require("../tags/static-one.tag");
let staticPageTwo = require("../tags/static-two.tag");
let homePage = require("../tags/home-page.tag");
let passport = require("passport");
let sessionHandler = require("../auth/sessionhandler");
let componentService = require("../services/componentService");
let logger = require('log4js').getLogger();
var requireDir = require('require-dir');
var tags = requireDir('../tags',{recurse:true});


/**
 * Get login page
 * @param req
 * @param res
 * @param next
 */
exports.getLoginPage = function (req, res, next) {

    if (sessionHandler.isLoggedIn(req)) {
        let email = sessionHandler.getSessionUserDetails(req).email;
        console.log(email);
        componentService.getAllComponents().then(components => {
            let data = {
                email: email,
                components: components
            };
            let html = riot.render(homePage, data);
            return res.render("home", {
                title: data.title,
                output: html,
                data: data
            });
        })
    } else {
        let data = {};
        let html = riot.render(loginPage, data);
        return res.render("index", {
            title: data.title,
            output: html,
            data: data
        });
    }
};


/**
 * Do local authentication
 * @param req
 * @param res
 * @param next
 */
exports.localAuthentication = function (req, res, next) {
    logger.info("Doing local authentication");
    return passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/login"
    });
};

/**
 * render static one page
 * @param req
 * @param res
 * @param next
 */
exports.getStaticPageOne = function (req, res, next) {
    let data = {
        info: "Static page one"
    };
    let html = riot.render(staticPageOne, data);
    console.log(html)
    return res.render("staticOne", {
        title: data.title,
        output: html,
        data: data
    });
};


/**
 * Render static page two
 * @param req
 * @param res
 * @param next
 * @returns {String}
 */
exports.getStaticPageTwo = function (req, res, next) {
    let data = {
        info: "Static page two"
    };
    let html = riot.render(staticPageTwo, data);
    return res.render("staticTwo", {
        title: data.title,
        output: html,
        data: data
    });
};
