/*
 * connect to local mysql database
 */
var app   = require('express')(); // Express App include
var http = require('http').Server(app); // http server
var mysql = require('mysql'); // Mysql include
var bodyParser = require("body-parser"); // Body parser for fetch posted data
var connection = mysql.createConnection({ // Mysql Connection to my local database
    host: 'localhost',
    user: 'root',
    password: 'Jessica84',
    database: 'sakila'
})
connection.connect();
/*
 * GET details listing from tabel details
 */
exports.list = function (req, res) {
    req.getConnection(function (err, connection) {
        connection.query('SELECT * FROM details', function (err, rows) {
            if (err)
                console.log("Error Selecting : %s ", err);
            res.render('details', { page_title: "details ", data: rows });
        });
    });
};
/*Save the details*/
exports.save = function (req, res) {
    var input = JSON.parse(JSON.stringify(req.body));
    req.getConnection(function (err, connection) {
        var data = {
            FirstName: inputfname,
            LastName: inputlname,
            Age: inputage,
            Email: inputemail,
            Country: inputountry,
            Phone: inputphone,
            Date: inputdate
        };
        var query = connection.query("INSERT INTO details set ? ", data, function (err, rows) {
            if (err)
                console.log("Error inserting : %s ", err);
            res.redirect('/details');
        });
    });
};
connection.end();