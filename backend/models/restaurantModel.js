const mongoose = require('mongoose')

const restaurantSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    text: {
      type: String,
      required: [true, 'please add a restaurant'],
    },
    rating: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: [true, 'please add a number 1-5'],
    },
    review: {
      type: String,
      maxLength: 25,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Restaurant', restaurantSchema)
