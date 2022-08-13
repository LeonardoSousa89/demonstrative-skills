
exports.up = function(knex) {
  return knex.schema.createTable('people',(table) => {
        table.increments('id').notNull().primary()
        table.string('name').notNull()
        table.string('job').notNull()
        table.float('salary').notNull()
        table.string('sector').notNull()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('people')
};
