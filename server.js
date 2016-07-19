var express        = require('express');
var app            = express();
var fs             = require('fs');
var http           = require('http');

var port = process.env.PORT || 8080; 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 


app.get('/', function(req, res) {
  fs.readFile('./index.html', function(error, data) {
    if (error) {
      res.writeHead(500);
      res.end();
    }
    res.writeHead(200);
    res.end(data);
  })
})

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;              