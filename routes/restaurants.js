/**
 * Created by shyam on 08/02/16.
 */

"use strict"
var express = require('express');
var router = express.Router();
var restaurantController = require("../controller/restaurantsController");



router.post("/",(req, res, next) => {
    restaurantController.addRestaurant(req, res, next)
});

router.route("/hi")
    .get((req, res, next) =>{
        res.json({method: "get"})
    })
    .post((req, res, next) => {
        res.json({
            method: "post"
        })
    })

module.exports = router;
