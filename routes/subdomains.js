/**
 * Created by shyam on 09/02/16.
 */
"use strict"
let express = require('express');
let router = express.Router();
let subdomainsController = require("../controller/subdomainsController");
let logger = require('log4js').getLogger();


router.get("/:domainName",(req, res, next) =>subdomainsController.sendPage(req, res, next));

router.get("/:domainName/configure", (req, res, next) =>subdomainsController.configureWebsite(req, res, next));

router.post("/:domainName/add-components", (req, res, next) => subdomainsController.addSelectedComponent(req, res, next));


module.exports = router;
