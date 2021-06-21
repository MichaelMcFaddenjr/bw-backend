const router = require('express').Router()
const {checkId, confirmItem} = require('./items-middleware')
const Items = require('./items-model')
const Users = require('../users/users-model')
const {route} = require('../users/users-router')

router.get('/', (req, res, next) => {
  Items.findAll()
  .then(items => {
    res.json(items)
  })
  .catch(next)
})

router.get('/:item_id', checkId, (req, res, next) => {
  const {item_id} = req.params
  Items.findById(item_id)
  .then(item => {
    res.json(item)
  })
  .catch(next)
})

router.post('/user/:user_id', confirmItem, (req, res, next) => {
  Items.addItem(req.body, req.params)
  .then(item => {
    res.status(201).json(item)
  })
  .catch(next)
})

router.put('/:user_id/:item_id', checkId, (req, res, next) => {
  const {item_name, item_description, item_price, item_image, item_category, item_location} = req.body
  Items.update(req.params.item_id, 
    {item_name, item_description, item_price, item_image, item_category, item_location})
  .then(() => {
    res.status(200).json(req.body)
  })
  .catch(next)
})

router.delete('/:user_id/:item_id', checkId, (req, res, next) => {
  Items.remove(req.params.item_id)
  .then(() => {
    res.status(200).json({
      message: 'Your item has been successfully removed'
    })
  })
  .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
  })
})

module.exports = router