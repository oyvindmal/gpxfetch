
var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var config = require('./config.json')
var request = require('request');
var cors = require('cors')
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
const { response } = require('express');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
server.listen(port);
app.use(cors())
app.get('/', function(req, res) {
    res.send("HELLO WORLD");
})

app.get('/test',function(req, res) {
    res.json(config);
})
app.get('/gpx', function(req, res) {
    var options = {
        url: config.gpxurl
      };
    request(options, function (error, response, body) {
        res.send(body);
    })
})