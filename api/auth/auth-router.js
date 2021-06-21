const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { add } = require('./auth-model')
const { checkCred, checkUserExists } = require('../middleware/checkUser')
const { tokenBuilder } = require('../middleware/tokenBuilder')

router.post('/register', checkCred, (req, res) => {
  const credentials = req.body;
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

router.post("/login", checkUserExists, (req, res) => {
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

module.exports = router;