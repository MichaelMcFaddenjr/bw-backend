const Items = require('./items-model')

const checkId = (req, res, next) => {
  const id = req.params.item_id
  Items.findBy(id)
  .then(item => {
    if(!item) {
      res.status(404).json({
        message: 'Item does not exist'
      })
    } else {
      next()
    }
  })
  .catch(err => {
    res.status(500).json({
      message: err.message
    })
  })
}

const confirmItem = (req, res, next) => {
  const {item_name, item_price, item_category, item_location} = req.body
  if (
    !item_name || !item_price || !item_category || !item_location
  ) {res.status(400).json({
    message: 'All items must have a name, price, category and location'
  })
  } else {
    next()
  }
}

module.exports = {
  checkId,
  confirmItem
}