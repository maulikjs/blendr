var express = require('express');
var router = express.Router();

var parse_sms = require('./parse_sms.js');

/* Heartbeat */
router.get('/', function(req, res, next) {
  res.status(200);
});

router.post('/', function(req, res, next) {
  // console.log("Incoming order: " + JSON.stringify(req.body, null, 2));
  var json = parse_sms.getOrder(req.body.Body);
  console.log("Order json: " + JSON.stringify(json, null, 2));
  // console.log(parse_sms.getOrder("apple ice"));
  res.status(200);
});

module.exports = router;
