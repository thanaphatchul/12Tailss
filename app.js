const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();


var http = require('http');
var fs = require('fs');
process.env.PWD = process.cwd()
app.use(express.static(__dirname ));
app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/12tails.html'));
  });
  app.use('/', router);
  var port = process.env.PORT || 3000;
  app.listen(port, "0.0.0.0", function() {
  console.log("Listening on Port 1800");
  });