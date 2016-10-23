var express = require('express');
var router = express.Router();
var request = require('request');
var parse_sms = require('./parse_sms.js');

var Particle = require('particle-api-js');
var particle = new Particle();
var secrets = require('./secrets.json');
var token = null;

particle.login({username: secrets.email, password: secrets.pw}).then(
  function(data){
    console.log('API call completed on promise resolve: ', data.body.access_token);
    token = data.body.access_token;
  },
  function(err) {
    console.log('API call completed on promise fail: ', err);
  }
);

/* Heartbeat */
router.get('/', function(req, res, next) {
  res.status(200).end();
});

router.post('/', function(req, res, next) {
  // console.log("Incoming order: " + JSON.stringify(req.body, null, 2));
  var json = parse_sms.getOrder(req.body.Body);
  console.log("Order json: " + JSON.stringify(json, null, 2));
  // console.log(parse_sms.getOrder("apple ice"));
  // console.log("particle token: " + particle.token);
  particle.publishEvent({ name: 'blendr',
    data: json,
    private: true,
    auth: token }).then(
    function(data) {
      if (data.body.ok) { console.log("Event published succesfully") }
    },
    function(err) {
      console.log("Failed to publish event: " + err)
    }
  );
  res.sendStatus(200).end();
});

module.exports = router;
