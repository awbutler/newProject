const mongoose = require('mongoose')

//Schema is a function/method within mongoose that you're calling
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please add a name'],
    },
    email: {
      type: String,
      required: [true, 'please add an email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'please add a password'],
    },
  },
  {
    // captures when it was created and the time when it was updated
    timestamps: true,
  }
)

// way for other models to reference the model
module.exports = mongoose.model('User', userSchema)
