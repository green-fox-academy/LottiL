const express = require('express');
const mysql = require('mysql2');

const port = 3000;
const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FGSz',
    database: 'todos',
});

conn.connect((err) => {
    if (err) {
        console.error('Cannot connect to the database', err);
        return;
    }
    console.log('Connection established');
});

app.use(express.static('public'));

app.use(express.json());

app.get('/', (req, res) => {
    res.redirect('/index.html');
});


app.get('/api/todos', (req, res) => {
    const query = `SELECT completed, id, text FROM todos`;
    conn.query(query, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: err.sqlMessage });
            return;
        }

        const data = {
            completed: result[0].completed,
            id: result[0].id,
            text: result[0].text
        }

        res.status(200).send(data);
    });
});

app.get('/api/todos/:id', (req, res) => {
    const query = `SELECT SELECT completed, id, text FROM todos
    WHERE id = ?`;
    const params = [req.params.id];
    conn.query(query, params, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: err.sqlMessage });
            return;
        } if (result.length <= 0) {
            res.status(404).send({ message: "Not Found" });
            return
        }

        const data = {
            completed: result[0].completed,
            id: result[0].id,
            text: result[0].text
        }

        res.status(200).send(data);
    });
})

app.post('/api/todos', (req, res) => {
    const query = `
            INSERT INTO todos (text)
            VALUES (?)
        `;

        const params = [
            req.body.text,
        ];

        conn.query(query, params, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send({ message: err.sqlMessage });
                return;
            }
            
        const data = {
            id: result.insertId,
            text: req.body.text,
            completed: req.body.completed
            //bár szerintem mivel ez default, nem kell hogy benne legyen a body-ban
        }
            res.status(200).send(data);
        });
});

app.put('/api/todos:id', (req, res) => {
    const params = [req.params.id];

    const query = `
        UPDATE todos 
        SET completed = true
        WHERE id = ?
    `;

    conn.query(query, params, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: err.sqlMessage });
            return;
        }
        const data = {
            id: req.params.id,
            text: req.body.text,
            completed: req.body.completed
            //bár szerintem mivel ez default, nem kell hogy benne legyen a body-ban, hanem itt csak a tru-t kéne beírni
        }
        res.status(200).send(data);
    });
});

app.delete('/api/todos:id', (req, res) => {
    const params = [req.params.id];

    const query = `
        UPDATE todos 
        SET destroyed = true
        WHERE id = ?
    `;

    conn.query(query, params, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: err.sqlMessage });
            return;
        }
        const data = {
            id: req.params.id,
            text: req.body.text,
            completed: req.body.completed,
            destroyed: "true"
        }
        res.status(200).send(data);
    });
});


app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));