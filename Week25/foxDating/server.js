const express = require('express');
const mysql = require('mysql2');

const port = 3000;
const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FGSz',
    database: 'dating',
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

//html endpoints

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.get('/profiles/:username', (req, res) => {
    res.redirect('/profiles.html');
});

app.get('/match/:username', (req, res) => {
    res.redirect('/match.html');
});

//API endpoints

app.post('/api/users', (req, res) => {
    const queryName = `
        SELECT username FROM profiles
        WHERE username = (?)`

    const paramsName = [req.body.username];

    conn.query(queryName, paramsName, (errorName, resultName) => {
        if (errorAlias) {
            res.status(500).send({ message: errorName.sqlMessage });
            return;
        } if (resultName.length > 0) {
            return res.status(400).send("Username already exists");
        }

        const query = `
            INSERT INTO profiles (username, nickname, birth_year, gender, target_gender, self_description, 
            profile_picture_url)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        const data = {
            username: req.body.username,
            nickname: req.body.nickname,
            birth_year: req.body.birth_year,
            gender: req.body.gender,
            target_gender: req.body.target_gender,
            self_description: req.body.self_description,
            profile_picture_url: req.body.profile_picture_url
        }

        const params = [
            data.username,
            data.nickname,
            data.birth_year,
            data.gender,
            data.target_gender,
            data.self_description,
            data.profile_picture_url,
        ];

        conn.query(query, params, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send({ message: err.sqlMessage });
                return;
            }
            res.status(200).send(data);
        });
    });
});

app.get('/api/users:username', (req, res) => {
    const username = req.params.username;
    const query = `SELECT * FROM profiles 
    WHERE username = ?`;
    const params = [username];
    conn.query(query, params, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send({ message: err.sqlMessage });
            return;
        } if (result.length === 0) {
            res.status(404).send("Not Found");
            return
        }
        res.status(200);
        res.send(result);
    });
});

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));