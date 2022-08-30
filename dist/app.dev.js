"use strict";

var express = require('express');

var path = require('path');

var port = 80; // const fs = require('fs');

var app = express();
app.use(express["static"]('static'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view'));
app.get('/', function (req, res) {
  var content = {
    'title': '______',
    "content": "____"
  };
  res.render('index.pug', content);
});
app.listen(port, function () {
  console.log("started at http://127.0.0.1:".concat(port));
});