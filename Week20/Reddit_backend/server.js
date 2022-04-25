const express = require('express');
const service = require('./service');
const conn = require('./db')

const port = 3000;
const app = express();

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send("hello world")
});

app.get('/posts', (req, res) => {
  const query = 'SELECT * FROM posts';
  conn.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: err.sqlMessage });
      return;
    }
    res.status(200);
    res.send(rows);
  });
});

app.post('/posts', (req, res) => {
  const query = `
        INSERT INTO posts (title, URL, timestamp, owner)
        VALUES (?, ?, ?, ?)
    `;

  const data = {
    title: req.body.title,
    URL: req.body.URL,
    timestamp: Date.now(),
    owner: req.body.owner,
  };

  const params = [
    data.title,
    data.URL,
    data.timestamp,
    data.owner,
  ]

  //validáció
  if (!data.title) {
    res.status(400).send({ message: 'missing title' });
    return;
  }
  if (!data.URL || !data.URL.includes(':')) {
    res.status(400).send({ message: 'missing or invalid URL' });
    return;
  }

  conn.query(query, params, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: err.sqlMessage });
      return;
    }

    const defaultScore = 0;

    res.status(200).send({
      id: result.insertId,
      score: defaultScore,
      ...data
    });
  });
});

app.put('/posts/:id/upvote', (req, res) => {
  service.vote(req, res, service.up)
});

app.put('/posts/:id/downvote', (req, res) => {
  service.vote(req, res, service.down)
});

app.delete('/posts/:id', (req, res) => {  //Máté kódrészlete, csak azért van benne, hogy lássam egyben.
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).send({ message: 'invalid ID' });
    return;
  }

  const username = req.headers.username;
  if (!username) {
    res.status(401).send({ message: 'Unauthorized1' });
    return;
  }

  const selectQuery = `SELECT * FROM posts WHERE id = ?`;
  const params = [id];

  conn.query(selectQuery, params, (selectErr, rows) => {
    if (selectErr) {
      res.status(500).send({ message: 'DB error' });
      return;
    }

    if (rows.length === 0) {
      res.status(404).send({ message: 'Not found' });
      return;
    }

    const owner = rows[0].owner;

    if (username !== owner) {
      res.status(401).send({ message: 'Unauthorized2' });
      return;
    }

    const deleteQuery = `DELETE FROM posts WHERE id = ?`;
    conn.query(deleteQuery, params, (deleteErr) => {
      if (deleteErr) {
        res.status(500).send({ message: 'DB error' });
        return;
      }

      // The usual response for a DELETE request is
      // 204 No Content with empty response body
      res.status(204).send();
    });
  });
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`));