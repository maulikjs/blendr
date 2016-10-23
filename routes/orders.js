var express = require('express');
var router = express.Router();

var twilioCred = require('./secrets.json');
var twilio = require('twilio');
var client = new twilio.RestClient(twilioCred.sid, twilioCred.token);


/* Heartbeat */
router.get('/', function(req, res, next) {
  res.status(200);
});

router.post('/', function(req, res, next) {
  console.log("Incoming order: " + JSON.stringify(req.body, null, 2));
  res.status(200).json({a:1});
});

module.exports = router;
