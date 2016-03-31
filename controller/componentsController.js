/**
 * Created by shyam on 09/02/16.
 */

"use strict"


var sessionHandler = require("../auth/sessionhandler");
var componentService = require("../services/componentService");



exports.getAllComponents = function (req, res, next) {
    componentService.getAllComponents().then(components => {
        res.json(components)
    }).fail(err => next())
};