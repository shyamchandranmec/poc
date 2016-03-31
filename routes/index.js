"use strict"
var express = require('express');
var router = express.Router();
var indexController = require("../controller/indexController");
var auth = require("../auth/authentication");
var passport = require("passport");



router.get('/',
    (req, res, next) => indexController.getLoginPage(req, res, next)
).post('/',
    (req, res, next) => indexController.localAuthentication(req, res, next)
);


router.get('/login', (req, res, next) => {
        indexController.getLoginPage(req, res, next)
    }
).post('/login', passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/login"
    }));

router.get('/logout', (req, res, next) => {
    req.session.destroy();
    req.logout();
    res.redirect('/');
});

router.get("/static-one", (req, res, next) => {
    indexController.getStaticPageOne(req, res, next);
});

router.get("/static-two", (req, res, next) => {
    indexController.getStaticPageTwo(req, res, next);
});

module.exports = router;
