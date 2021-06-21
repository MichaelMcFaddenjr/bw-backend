const { findByUserName } = require('../users/users-model')

const checkCred = (req, res, next) => {
  let credentials = req.body
  if (!credentials.username || !credentials.password || !credentials.email) {
    res.status(400).json({message: 'username, email and password required'})
  }
  findByUserName(req.body.username)
  .then((user) => {
    if (!user) {
      next()
    } else {
      res.status(401).json('username taken')
    }
  })
  .catch(next)
}

const checkUserExists = (req, res, next) => {
  let credentials = req.body
  if (!credentials.username || !credentials.password) {
    res.status(400).json({message: 'username and password required'})
  }
  findByUserName(req.body.username)
    .then((user) => {
      if (user) {
        req.body.user = user
        next()
      } else {
        res.status(401).json('invalid credentials')
      }
    })
    .catch(next)
}

module.exports = {
  checkCred,
  checkUserExists
}