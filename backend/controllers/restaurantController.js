const asyncHandler = require('express-async-handler')

const Restaurant = require('../models/restaurantModel')
const User = require('../models/userModel')

const getRestaurants = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find({ user: req.user.id })
  res.status(200).json(restaurants)
})

const createRestaurant = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('please add a restaurant')
  }

  if (!req.body.rating) {
    res.status(400)
    throw new Error('please add a rating 1-5')
  }

  if (req.body.review.length >= [25]) {
    res.status(400)
    throw new Error('please shorten your review to less than 25 characters')
  }

  const restaurant = await Restaurant.create({
    text: req.body.text,
    rating: req.body.rating,
    review: req.body.review,
    user: req.user.id,
  })
  res.status(200).json(restaurant)
})

const updateRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id)

  if (!restaurant) {
    res.status(400)
    throw new Error('Restaurant not found')
  }

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (restaurant.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('user not authorized')
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

  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  if (restaurant.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('user not authorized')
  }

  await restaurant.deleteOne()

  res.status(200).json({ id: req.params.id })
})

module.exports = {
  getRestaurants,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
}
