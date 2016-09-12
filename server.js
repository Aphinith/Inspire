var express        = require('express');
var app            = express();
var http           = require('http');
var request        = require('request');

var port = process.env.PORT || 4000; 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// start app ===============================================
// startup our app at http://localhost:4000
app.listen(port);               


/**************************************************************/
  var search = 'http://quotes.rest/quote.json?category=';
  var key = '&api_key=cy7IIIwDoKOKCIqNr_jDCQeF';
  var ranNum = Math.floor(Math.random() * 10);


app.get('/inspire', function(req, res) {
  console.log('got inside server side for inspire quotes');
    var options = ['inspire', 'positive', 'confidence', 'self-improvement', 'happiness', 'attitude', 'motivational', 'inspirational', 'success', 'successful-mind'];
  request(search + 'inspire' + key, function(error, response, body) {
    console.log('this is error:', error);
    console.log('inside server and this is response:', response)
  })
  res.send('ok');
})


/**************************************************************/


// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;              