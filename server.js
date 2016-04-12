#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

var public_dir = './public/';

app.get('/setup', function(req,res){
	res.sendfile(public_dir + 'setup.html')
});

app.get('/appDockerfile', function(req,res){
	res.sendfile(public_dir + 'appDockerfile.html')
});

app.get('/dockerImage', function(req,res){
	res.sendfile(public_dir + 'dockerImage.html')
});

app.listen(8080, function() { console.log('listening')});
