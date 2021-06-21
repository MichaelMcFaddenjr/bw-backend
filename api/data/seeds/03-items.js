exports.seed = function(knex) {

  return knex('items').insert([
    {
      item_name: "Canon MarkIII with lens",
      item_description: "Rent my camera",
      item_price: "$150 per day",
      item_image: "",
      item_category: "Camera",
      item_location: "Los Cabos"
    },
    {
      item_name: "Red Dragon",
      item_description: "The best in the world",
      item_price: "$500 per day",
      item_image: "",
      item_category: "Camera",
      item_location: "San Diego"
    },
    {
      item_name: "Bose Speaker System",
      item_description: "Turn it up to 11",
      item_price: "$250 per day",
      item_image: "",
      item_category: "Sound",
      item_location: "San Clemente"
    },
    {
      item_name: "Fog Machine",
      item_description: "Smoke it out",
      item_price: "$25 per day",
      item_image: "",
      item_category: "Party",
      item_location: "San Diego"
    },
  ])}