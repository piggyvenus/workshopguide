#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

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

app.get('/binaryDeployment', function(req,res){
	res.sendfile(public_dir + 'binaryDeployment.html')
});


app.get('/S2I-jboss', function(req,res){
	res.sendfile(public_dir + 'S2I-jboss.html')
});

app.get('/S2I-datablubase', function(req,res){
	res.sendfile(public_dir + 'S2I-datablubase.html')
});

app.get('/S2I-codechanges', function(req,res){
	res.sendfile(public_dir + 'S2I-codechanges.html')
});

app.get('/bluegreen', function(req,res){
	res.sendfile(public_dir + 'bluegreen.html')
});

app.get('/codePromotion', function(req,res){
	res.sendfile(public_dir + 'codePromotion.html')
});

app.listen(8080, function() { console.log('listening')});
