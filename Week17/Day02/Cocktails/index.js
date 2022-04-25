const express = require('express');
const cocktails = require('./cocktails');

const app = express();
const PORT = 3000;

app.use('/assets', express.static('assets'));
app.set('view engine', 'ejs');

app.get('/cocktails', (req, res) => {
  const selectedAlcohol = req.query.alcohol;
  let filteredCocktails = cocktails.cocktails;

  if (selectedAlcohol) {
    filteredCocktails = cocktails.cocktails.filter((cocktail) =>
      cocktail.contains.includes(selectedAlcohol) 
    );
  }

  const templateData = {
    cocktails: filteredCocktails,
    alcohols: cocktails.alcohols,
  };

  res.render('cocktails', templateData);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
