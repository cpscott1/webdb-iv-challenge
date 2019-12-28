const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  addRecipe
}

function getRecipes() {
  return db('recipe');
}

function addRecipe(recipe) {
  return db('recipe')
    .insert(recipe)
    .then(ids => ({
      id: ids[0]
    }));
}
