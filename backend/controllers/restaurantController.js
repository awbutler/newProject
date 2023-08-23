const asyncHandler = require('express-async-handler')

const getRestaurant = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get restaurants' })
})

const createRestaurant = asyncHandler(async (req, res) => {
  if (!req.body.restaurant) {
    res.status(400)
    throw new Error('please add a restaurant')
  }
  res.status(200).json({ message: 'Create restaurants' })
})

const updateRestaurant = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` })
})

const deleteRestaurant = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
}
