const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { add } = require('./auth-model')
const { checkCred, checkUserExists } = require('../middleware/checkUser')
const { tokenBuilder } = require('../middleware/tokenBuilder')


router.post('/register', checkCred, (req, res) => {
  cDonst credentials = req.body;
  const hash = bcrypt.hashSync(credentials.password, 8)
  credentials.password = hash

  add(credentials)
    .then((user) => {
      res.status(201).json(user)
    })
    .catch((err) => {
      res.status(400).json({
        message: 'username and password required',
        error: err.message
      })
    })
});

router.post("/login", checkUserExists, (req, res, next) => {
  const user = req.body.user;
  const { username, password } = req.body;

  if (user && bcrypt.compareSync(password, user.password)) {
    const token = tokenBuilder(user);
    res.status(200).json({
      message: `welcome, ${username} `,
      token: token,
    });
  } else {
    res.status(401).json({
      message: "invalid credentials",
    });
  }
});
/*
    IMPLEMENT
    You are welcome to build additional middlewares to help with the endpoint's functionality.

    1- In order to log into an existing account the client must provide `username` and `password`:
      {
        "username": "Captain Marvel",
        "password": "foobar"
      }

    2- On SUCCESSFUL login,
      the response body should have `message` and `token`:
      {
        "message": "welcome, Captain Marvel",
        "token": "eyJhbGciOiJIUzI ... ETC ... vUPjZYDSa46Nwz8"
      }

    3- On FAILED login due to `username` or `password` missing from the request body,
      the response body should include a string exactly as follows: "username and password required".

    4- On FAILED login due to `username` not existing in the db, or `password` being incorrect,
      the response body should include a string exactly as follows: "invalid credentials".
  */
module.exports = router;
