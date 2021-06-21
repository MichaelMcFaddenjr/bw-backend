exports.seed = function(knex) {

  return knex('user_items').insert([
    {item_id: 1, user_id: 1},
    {item_id: 2, user_id: 2},
    {item_id: 3, user_id: 3},
    {item_id: 4, user_id: 4},
  ]);
}