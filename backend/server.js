const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 8000

connectDB()

const app = express()

//parsing raw JSON
app.use(express.json())

//Sending raw form data
app.use(express.urlencoded({ extended: true }))

app.use('/api/restaurant', require('./routes/restaurantRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/happy', require('./routes/happyRoutes'))

app.use(errorHandler)

app.get('/', (req, res) => {
  res.send('Hey this works')
})

app.listen(port, () => console.log(`server is on port ${port}`))
