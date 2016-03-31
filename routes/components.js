/**
 * Created by shyam on 09/02/16.
 */

"use strict"
var express = require('express');
var router = express.Router();
var componentsController = require("../controller/componentsController");



router.get("/", (req, res, next) => {
    componentsController.getAllComponents(req, res, next);
});

module.exports = router;
