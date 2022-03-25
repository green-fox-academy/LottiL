const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

app.get('/', (req, res)=>{
    res.render('cocktails', {name: name}); //valahogy a változókat kéne definiálni, és a cocktails.ejs-t összebarátkoztatni a coctails.js-sel
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
