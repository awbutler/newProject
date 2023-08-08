const asyncHandler = require('express-async-handler')

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `welcome back to h town JV` })
})

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(401)
    throw new Error('Testing')
  }
  res.status(200).json({ message: `${email},${password}` })
})

module.exports = {
  registerUser,
  loginUser,
}
