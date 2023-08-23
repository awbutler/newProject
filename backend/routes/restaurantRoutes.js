const express = require('express')
const router = express.Router()
const {
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurantController')

router.route('/').get(getRestaurant).post(createRestaurant)
router.route('/:id').delete(deleteRestaurant).put(updateRestaurant)

module.exports = router
