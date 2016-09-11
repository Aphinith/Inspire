var express        = require('express');
var app            = express();
var fs             = require('fs');
var http           = require('http');

var port = process.env.PORT || 4000; 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// start app ===============================================
// startup our app at http://localhost:4000
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;              