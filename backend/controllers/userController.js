const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) => {
  // destructuring values from the object
  // console.log(req.body)
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw new Error('A field is missing')
  }
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('user already exists!')
  }
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('invalid user data')
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  //   if (!email || !password) {
  //     res.status(401)
  //     throw new Error('Testing')
  //   }
  //   res.status(200).json({ message: `${email},${password}` })
  const user = await User.findOne({ email })
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw new Error('invalid credentials')
  }
})

module.exports = {
  registerUser,
  loginUser,
}
