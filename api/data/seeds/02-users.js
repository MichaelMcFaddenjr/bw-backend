exports.seed = function(knex) {

  return knex('users').insert([
    {
      username: "michael",
      email: "michael@michael.com",
      password: "$2a$08$6t/Zvuz6xVB5MjHgwLgh6Oq7aMUqPpaUpQ0zRW58N.kVlFvEskhs2"
    },
    {
      username: "jaden",
      email: "jaden@jaden.com",
      password: "$2a$08$1OSX9kRoNw8IXlzhJNhPf.xknY/OE55pkDXRJsDavylTGcNG1dBqm"
    },
    {
      username: "fernando",
      email: "fernando@fernando.com",
      password: "$2a$08$5btnUyeunm.EJ3jyOB4Dle7C74EhNHxMlD2Op.K0k9n8LhqrzVxR6"
    },
    {
      username: "joseph",
      email: "joseph@joseph.com",
      password: "$2a$08$dmx2I5XmkBqTcenYvY0Pd.cj/vFLq9ZslXDL3fM0t054tNYzzGvBa"
    }
  ])}