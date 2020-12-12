// This is the routes.js file!

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Your connection adress (localhost).
  user: 'root',     // Your database's username.
  password: '',        // Your database's password.
  database: 'dashboard'   // Your database's name.
});


connection.connect();

connection.query('SELECT * FROM `spending` WHERE 1', function (err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0]);
});

connection.end();
/*
const app = express();

// Creating a GET route that returns data from the 'data' table.
app.get('/data', function (req, res) {
  // Connecting to the database.
  connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'data' table).
    connection.query('SELECT `EMAIL` FROM `data` WHERE 1', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results);


    });
  });
});


// Starting our server.
app.listen(5000, () => {

  console.log('affichage dune donnee', 'blabla ');
});
*/