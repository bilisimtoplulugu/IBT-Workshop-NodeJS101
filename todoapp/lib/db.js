var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootsecret',
    database: 'todoapp'
});

connection.connect(function (err) {
    if (err) {
        console.log(err);

        return;
    }

    console.log('Connection Success!');
});

module.exports = connection;