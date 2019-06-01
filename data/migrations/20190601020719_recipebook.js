
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dish', tbl => {
      tbl.increments();

      tbl
      .string('name', 128)
      .notNullable()
      .unique();
    })
    .createTable('recipe', tbl => {
      tbl.increments();

      tbl
      .string('name', 128)
      .notNullable()
      .unique();

      tbl
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dish')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    })
    .createTable('ingredient', tbl => {
      tbl.increments();

      tbl
      .string('name', 128)
      .notNullable()
    })
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();

      tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

      tbl
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredient')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('recipe')
  .dropTableIfExists('dish');
};
