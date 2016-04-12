#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

var app = express();

var path = require('path');

app.get('/', function(req, res){
  res.send(path.join(__dirname + '/index.html'));
});

app.listen(8080);
