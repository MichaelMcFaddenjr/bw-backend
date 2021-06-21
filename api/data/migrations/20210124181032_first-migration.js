exports.up = function (knex) {
  return knex.schema
  .createTable('users', users => {
    users.increments('user_id');
    users.string('username', 255).notNullable().unique();
    users.string('password', 255).notNullable();
    users.string('email', 400).notNullable();
  })
  .createTable('items', items => {
    items.increments('item_id');
    items.string('item_name').notNullable()
    items.string('item_description')
    items.string('item_price').notNullable()
    items.string('item_image')
    items.string('item_category').notNullable()
    items.string('item_location').notNullable()
  })
  .createTable('user_items', tbl => {
    tbl.increments('ui_id')
    tbl.integer('item_id')
      .unsigned()
      .notNullable()
      .references('item_id')
      .inTable('items')
      .onDelete('CASCADE')
    tbl.integer('user_id')
      .unsigned()
      .notNullable()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
  })
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists('users_items')
  .dropTableIfExists('items')
  .dropTableIfExists('users')
};
