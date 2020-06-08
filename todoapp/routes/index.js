var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mysql = require('mysql');
var connection = require('../lib/db');

router.get('/', function (req, res) {
    res.render('index');
});

router.get('/todo', function (req, res) {
    res.render('todo/todo');
});

router.get('/todo/add', function (req, res) {
    res.render('todo/add');
});

router.post('/todo/add', function (req, res) {
    var name = req.body.name;
    var task = req.body.task;

    connection.query('insert into todos (name, task) values ("' + name + '", "' + task + '")', function (err, result) {
        if (err) {
            return;
        }

        res.redirect('/todo/add');
    });
});

router.get('/todo/list', function (req, res) {
    connection.query('select * from todos;', function (err, result) {
        if (err) {
            return;
        }

        console.log(result);
        
        res.render('todo/todo', {
            data: result
        });
    });
});



module.exports = router;