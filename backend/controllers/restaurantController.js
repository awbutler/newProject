const asyncHandler = require('express-async-handler')

const Restaurant = require('../models/restaurantModel')

const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find()
  res.status(200).json(restaurants)
})

const createRestaurant = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('please add a restaurant')
  }

  const restaurant = await Restaurant.create({
    text: req.body.text,
  })
  res.status(200).json(restaurant)
})

const updateRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id)

  if (!restaurant) {
    res.status(400)
    throw new Error('Restaurant not found')
  }

  const updatedRestaurant = await Restaurant.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  )

  res.status(200).json(updatedRestaurant)
})

const deleteRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id)

  if (!restaurant) {
    res.status(400)
    throw new Error('Restaurant not found')
  }

  await restaurant.remove()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
}
