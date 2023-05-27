const express = require('express');
const app = express();
const port = 3000; // or any port number you prefer

// Define routes and middleware here

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'yva84dvqTS?#!',
  database: 'trivselvdb'
});

app.get('/tutors', (req, res) => {
    pool.query('SELECT * FROM tutors', (error, results) => {
      if (error) {
        console.error('Error executing query: ', error);
        res.status(500).send('Error executing query');
      } else {
        res.json(results);
      }
    });
  });
  