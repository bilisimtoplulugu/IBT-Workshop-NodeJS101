var express = require('express');
var indexRouter = require('./routes/index');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(80, function () {
    console.log('Example app listening on port 80!');
});