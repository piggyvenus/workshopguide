#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname + '/public')));

var public_dir = './public/';

var images_dir = './images/';

app.get('/setup', function(req,res){
	res.sendfile(public_dir + 'setup.html')
});

app.get('/createAppFromDockerImage', function(req,res){
	res.sendfile(public_dir + 'createAppFromDockerImage.html')
});

app.get('/createAppUsingDockerBuild', function(req,res){
	res.sendfile(public_dir + 'createAppUsingDockerBuild.html')
});

app.get('/binaryDeployment', function(req,res){
	res.sendfile(public_dir + 'binaryDeployment.html')
});


app.get('/usingWebConsole', function(req,res){
	res.sendfile(public_dir + 'usingWebConsole.html')
});

app.get('/jbossEAPBuilder', function(req,res){
	res.sendfile(public_dir + 'jbossEAPBuilder.html')
});

app.get('/usingTemplates', function(req,res){
	res.sendfile(public_dir + 'usingTemplates.html')
});

app.get('/scaleAppInstances', function(req,res){
	res.sendfile(public_dir + 'scaleAppInstances.html')
});

app.get('/configSSLApp', function(req,res){
	res.sendfile(public_dir + 'configSSLApp.html')
});

app.get('/bluegreen', function(req,res){
	res.sendfile(public_dir + 'bluegreen.html')
});

app.get('/scmWebHooks', function(req,res){
	res.sendfile(public_dir + 'scmWebHooks.html')
});

app.get('/rollbackApp', function(req,res){
	res.sendfile(public_dir + 'rollbackApp.html')
});
app.get('/codePromotion', function(req,res){
	res.sendfile(public_dir + 'codePromotion.html')
});

app.get('/blue_green_deployment', function(req,res){
	res.sendfile(images_dir + 'blue_green_deployment.png')
});

app.get('/blue_deployment', function(req,res){
	res.sendfile(images_dir + 'blue_deployment.jpeg')
});

app.get('/blue_green_active_green', function(req,res){
	res.sendfile(images_dir + 'blue_green_active_green.png')
});

app.get('/jboss_install_1', function(req,res){
	res.sendfile(images_dir + 'jboss_install_1.png')
});

app.get('/jboss_install_2', function(req,res){
	res.sendfile(images_dir + 'jboss_install_2.png')
});

app.get('/jboss_install_3', function(req,res){
	res.sendfile(images_dir + 'jboss_install_3.png')
});

app.get('/jboss_install_4', function(req,res){
	res.sendfile(images_dir + 'jboss_install_4.png')
});

app.get('/jboss_install_6a', function(req,res){
	res.sendfile(images_dir + 'jboss_install_6a.jpg')
});

app.get('/jboss_install_6', function(req,res){
	res.sendfile(images_dir + 'jboss_install_6.jpg')
});

app.get('/jboss_install_5', function(req,res){
	res.sendfile(images_dir + 'jboss_install_5.png')
});

app.get('/jboss_install_7', function(req,res){
	res.sendfile(images_dir + 'jboss_install_7.jpg')
});

app.get('/jboss_install8', function(req,res){
	res.sendfile(images_dir + 'jboss_install8.jpg')
});

app.get('/jboss_install_9', function(req,res){
	res.sendfile(images_dir + 'jboss_install_9.jpg')
});

app.get('/jboss_install_10', function(req,res){
	res.sendfile(images_dir + 'jboss_install_10.jpg')
});

app.get('/jboss_install_11', function(req,res){
	res.sendfile(images_dir + 'jboss_install_11.jpg')
});

app.get('/jboss_install_12', function(req,res){
	res.sendfile(images_dir + 'jboss_install_12.jpg')
});

app.get('/jboss_install_13', function(req,res){
	res.sendfile(images_dir + 'jboss_install_13.jpg')
});


app.get('/ks-myjbossapp', function(req,res){
	res.sendfile(images_dir + 'ks-myjbossapp.jpg')
});

app.get('/blue_app', function(req,res){
	res.sendfile(images_dir + 'blue_app.jpg')
});

app.get('/green_app', function(req,res){
	res.sendfile(images_dir + 'green_app.jpg')
});

app.get('/scale_updown_overview', function(req,res){
	res.sendfile(images_dir + 'scale_updown_overview.jpg')
});

app.get('/scale_updown_overview_scaled', function(req,res){
	res.sendfile(images_dir + 'scale_updown_overview_scaled.jpg')
});


app.get('/scale_up', function(req,res){
	res.sendfile(images_dir + 'scale_up.jpg')
});

app.get('/scale_down', function(req,res){
	res.sendfile(images_dir + 'scale_down.jpg')
});

app.get('/green_deployment', function(req,res){
	res.sendfile(images_dir + 'green_deployment.png')
});

app.get('/github_show_url', function(req,res){
	res.sendfile(images_dir + 'github_show_url.jpg')
});

app.get('/github_add_webhook', function(req,res){
	res.sendfile(images_dir + 'github_add_webhook.jpg')
});

app.get('/application_create_screen', function(req,res){
	res.sendfile(images_dir + 'application_create_screen.jpeg')
});

app.get('/mysql_ephemeral_template', function(req,res){
	res.sendfile(images_dir + 'mysql_ephemeral_template.jpeg')
});

app.get('/mysql_ephemeral_creation', function(req,res){
	res.sendfile(images_dir + 'mysql_ephemeral_creation.jpeg')
});

app.get('/mysql_pod_on_proj_details', function(req,res){
	res.sendfile(images_dir + 'mysql_pod_on_proj_details.jpeg')
});

app.get('/mysql_pod_on_proj_overview', function(req,res){
	res.sendfile(images_dir + 'mysql_pod_on_proj_overview.jpeg')
});

app.get('/dc_edit', function(req,res){
	res.sendfile(images_dir + 'dc_edit.jpg')
});

app.get('/dc_edit_raw', function(req,res){
	res.sendfile(images_dir + 'dc_edit_raw.jpg')
});

app.get('/mysql_service', function(req,res){
	res.sendfile(images_dir + 'mysql_service.jpeg')
});

app.get('/cakephp_confirm', function(req,res){
	res.sendfile(images_dir + 'cakephp_confirm.jpeg')
});

app.get('/dbtest_service.jpeg', function(req,res){
	res.sendfile(images_dir + 'dbtest_service.jpeg')
});


app.get('/console_project_overview', function(req,res){
	res.sendfile(images_dir + 'console_project_overview.jpeg')
});

app.get('/login', function(req,res){
	res.sendfile(images_dir + 'login.jpeg')
});

app.get('/projects_list', function(req,res){
	res.sendfile(images_dir + 'projects_list.jpeg')
});

app.get('/project_details', function(req,res){
	res.sendfile(images_dir + 'project_details.jpeg')
});

app.get('/topology_view', function(req,res){
	res.sendfile(images_dir + 'topology_view.jpg')
});

app.get('/topology_button', function(req,res){
	res.sendfile(images_dir + 'topology_button.jpg')
});

app.get('/topology_details', function(req,res){
	res.sendfile(images_dir + 'topology_details.jpg')
});

app.get('/project_browse', function(req,res){
	res.sendfile(images_dir + 'project_browse.jpeg')
});

app.get('/project_build_details', function(req,res){
	res.sendfile(images_dir + 'project_build_details.jpeg')
});

app.get('/project_pods', function(req,res){
	res.sendfile(images_dir + 'project_pods.jpg')
});

app.get('/project_pod_details', function(req,res){
	res.sendfile(images_dir + 'project_pod_details.jpgg')
});

app.get('/terminal_view', function(req,res){
	res.sendfile(images_dir + 'terminal_view.jpg')
});

app.listen(8080, function() { console.log('listening')});
