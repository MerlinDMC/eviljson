var express = require('express');
var app = express();

var EVIL = require('../');
var fs = require('fs');

var data = fs.readFileSync(__dirname + '/test.json');


app.get('/json', function (req, res) {
  res.send(JSON.parse(data));
});

app.get('/evil', function (req, res) {
  res.send(EVIL.parse(data));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
