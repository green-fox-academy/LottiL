const express = require('express');
const mysql = require('mysql2');

const port = 3000;
const app = express();

const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'FGSz',
  database: 'my_app',
  debug: false,
});

pool.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("Connection established");
    }
});

// Serve files from the 'public' folder
app.use(express.static('public'));

// Convert JSON bodies to JavaScript objects
app.use(express.json());

app.get('/', (req, res) => {
    // Load index.html from the public folder
    res.redirect('/index.html');
});

app.post('/api/my_app', (req, res) => {
    const query = `
        INSERT INTO app (dt, what, place)
        VALUES (?, ?, ?)
    `;
    const params = [
        req.body.dt,
        req.body.what,
        req.body.place
    ];

    pool.query(query, params, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: err.sqlMessage });
            return;
        }

        res.status(201).send({ message: 'Success' });
    });
});

app.get('/api/my_app', (req, res) => {
    const query = `
        SELECT * FROM app
        WHERE dt BETWEEN ? AND ?
    `;

    const params = [
        req.query.from,
        req.query.to
    ];

    pool.query(query, params, (err, rows) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: err.sqlMessage });
            return;
        }
        if (rows.length === 0) {
            res.status(404).send({ message: 'Not found' });
            return;
        }
        res.send(rows);
    });
});

app.use('/api/*', (req, res) => {
    // Return 404 errors for the REST API in JSON format
    res.status(404).send({ message: 'Not found' });
 });

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));