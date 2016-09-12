var express = require('express');
var app = express();
var request = require('request');
var id = require('./public/keys.js');

var port = process.env.PORT || 4000; 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// start app ===============================================
// startup our app at http://localhost:4000
app.listen(port);               


/**************************************************************/

var search = id.module.search;
var key = id.module.key;

app.get('/inspire', function(req, res) {
  var options = ['inspire', 'positive', 'confidence', 'self-improvement', 'happiness', 'attitude', 'motivational', 'inspirational', 'success', 'successful-mind'];
  var ranNum = Math.floor(Math.random() * 10);
  request(search + options[ranNum] + key, function(error, response, body) {
    if (error) {
      console.log('this is error: ', error);
    }
    res.send(body);
  })
});

app.get('/wisdom', function(req, res) {
  var options = ['wise', 'hope', 'wisdom', 'tso-life', 'doingyourbest', 'conscience', 'philosophy', 'existentialism', 'beauty', 'enlightenment'];
  var ranNum = Math.floor(Math.random() * 10);
  request(search + options[ranNum] + key, function(error, response, body) {
    if (error) {
      console.log('this is error: ', error)
    }
    res.send(body);
  })
});

app.get('/laughter', function(req, res) {
  var options = ['laughter', 'hilarious', 'humor', 'tso-funny', 'laugh', 'funny', 'sense-of-humor', 'fun', 'joke', 'geek'];
  var ranNum = Math.floor(Math.random() * 10);
  request(search + options[ranNum] + key, function(error, response, body) {
    if (error) {
      console.log('this is error: ', error);
    }
    res.send(body);
  })
})


/**************************************************************/


// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;              