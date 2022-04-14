const express = require('express');
const mysql = require('mysql2');

const port = 3000;
const app = express();

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'FGSz',
    database: 'bookinfo',
});

conn.connect((err) => {
  if (err) {
    console.error('Cannot connect to the database', err);
    return;
  }
  console.log('Connection established');
});

app.use(express.json());

app.use(express.static('public'));

app.get('/api/bookTitle', (req, res) => {
  const query = 'SELECT book_name FROM book_mast'; 
  conn.query(query, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: err.sqlMessage });
      return;
    }
    if (rows.length === 0) {
      res.status(404).send({ message: 'Not found' });
      return;
    }
    console.log('Data received from Db:\n');
    res.send(rows);
  });  
});

app.get('/api/allBooks', (req, res) => {
  const query = 
  `SELECT book_mast.book_name , aut_name , cate_descrip, pub_name, book_price
  FROM book_mast
  JOIN author ON book_mast.aut_id = author.aut_id
  JOIN category ON  book_mast.cate_id = category.cate_id
  JOIN publisher ON book_mast.pub_id = publisher.pub_id
  WHERE cate_descrip LIKE ? 
  AND pub_name LIKE ?
  AND book_price < ?
  AND book_price > ?
   `
  ; 

  const params = [
    req.query.category || "%",
    req.query.publisher || "%",
    req.query.plt || "9999999999",
    req.query.pgt || "0"
  ];

  conn.query( query, params, (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: err.sqlMessage });
      return;
    }
    if (rows.length === 0) {
      res.status(404).send({ message: 'Not found' });
      return;
    }
    console.log('Data received from Db:\n');
    res.send(rows);
  });  
});

/* conn.query('SELECT * FROM table_name;', (err, rows) => {
    console.log('Data received from Db:\n');
    console.log(rows);
});

conn.query('SELECT * FROM table_name;', (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      return null;
    }
  
    console.log('Data received from Db:\n');
    console.log(rows);
    return rows;
});

app.get('/', (req, res) => {
  conn.query('SELECT book_name FROM book_mast;', (err, rows) => {
    if (err) {
      console.error(`Cannot retrieve data: ${err.toString()}`);
      res.sendStatus(500);
      return null;
    }
    return res.send(rows);
  });
}); */

app.listen(port, () =>
    console.log(`Server running at http://localhost:${port}`));