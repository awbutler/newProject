const express = require('express')
const router = express.Router()
const {
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require('../controllers/restaurantController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getRestaurants).post(protect, createRestaurant)
router
  .route('/:id')
  .delete(protect, deleteRestaurant)
  .put(protect, updateRestaurant)

module.exports = router
