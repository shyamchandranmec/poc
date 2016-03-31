var express = require('express');
var router = express.Router();
var userServices = require("../services/userService");
/* GET users listing. */
router.get('/', function(req, res, next) {
  userServices.getAllUsers().then(function (result) {
    res.send(result)
  }).fail(function (err) {
    res.send(err);
  })
});

router.post('/', function (req, res, next) {
  userServices.addUser(req.body).then(function (result) {
    res.send(result)
  }).fail(function (err) {
    res.send(err)
  })
});

module.exports = router;
