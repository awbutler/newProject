const asyncHandler = require('express-async-handler')

const practiceFunction = (req, res) => {
  res.status(200).json({ message: `cubs win` })
}

const yolo = (req, res) => {
  const num = req.params.num
  if (num % 2 == 0) {
    res.status(200).json({ message: `${num} is even` })
  } else {
    res.status(400).json({ message: `${num} is odd` })
  }
}

module.exports = {
  practiceFunction,
  yolo,
}
