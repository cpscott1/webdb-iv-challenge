const db = require('../data/dbConfig.js');

module.exports = {
  getDishes,
  addDish,
  getDish
}

function getDishes() {
  return db('dish');
}

function getDish(id) {
  return db('dish')
    .where({ id })
    .first();
}

function addDish(dish) {
  const [id] = db('dish')
  .insert(dish)

  return getDish(id);
}
