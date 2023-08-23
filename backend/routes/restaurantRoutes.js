const express = require('express')
const router = express.Router()
const {
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurantController')

router.route('/').get(getRestaurants).post(createRestaurant)
router.route('/:id').delete(deleteRestaurant).put(updateRestaurant)

module.exports = router
