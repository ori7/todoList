const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const PORT = 8888;

const app = express();
app.use(cors());
app.use(bodyParser());

const http = require('http').Server(app);

app.post('/todoList', function (req, res) {
    const query = 'INSERT INTO `todo`(`date`, `description`, `familyId`) VALUES("' + req.body.date + '","' + req.body.description + '","' + req.body.familyId + '")';
    connection(query, function (error, results) {
        if (error) {
            throw error;
        }
        res.json({
            status: 'Aded!'
        });
    });
});

app.get('/family', function (req, res) {
    const query = 'SELECT * FROM `family`';
    connection(query, function (error, results) {
        if (error) {
            throw error;
        }
        res.send(results);
    });
});

app.get('/todoList', function (req, res) {
    const query = 'SELECT todo.description, todo.date, family.name, todo.id FROM todo INNER JOIN family ON todo.familyId = family.id';
    connection(query, function (error, results) {
        if (error) {
            throw error;
        }
        res.send(results);
    });
});

app.delete('/todoList/:id', function (req, res) {
    const query = 'DELETE FROM `todo` WHERE `id` ="' + req.params.id + '"';
    connection(query, function (error, results) {
        if (error) {
            throw error;
        }
        res.json({
            status: 'The recipe delited!'
        });
    });
});

function connection(query, callback) {
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "todolist"
    });
    connection.connect();
    connection.query(query, callback);
    connection.end();
};

http.listen(PORT, function () {
    console.log('server started at port ' + PORT)
});