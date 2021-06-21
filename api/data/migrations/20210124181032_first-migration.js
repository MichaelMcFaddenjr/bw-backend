exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.string('email', 320).notNullable()
      users.timestamps(false, true)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('users')
}
