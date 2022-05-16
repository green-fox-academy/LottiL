const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.post('/signup', (req, res) => {
  const { name, email} = req.body;

  console.log(name)
  console.log(email)

  if (!name || !email) {
    res.status(400).send('please fill the form');
    return;
  }
  res.render('signup', req.body);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
