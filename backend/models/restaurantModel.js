const mongoose = require('mongoose')

const restaurantSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'please add a restaurant'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Restaurant', restaurantSchema)
