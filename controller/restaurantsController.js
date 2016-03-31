/**
 * Created by shyam on 08/02/16.
 */

"use strict"


var sessionHandler = require("../auth/sessionhandler");
var slugify = require("slug");
var restaurantService = require("../services/restaurantService");



exports.addRestaurant = function (req, res, next) {
    let name = req.body.name;
    let restaurantDetails = {
        name: name,
        slug:slugify(name,{lower:true})
    };
    restaurantService.addRestaurant(restaurantDetails).then((result) => {
        res.json(result)
    }).fail((err) => next())
}