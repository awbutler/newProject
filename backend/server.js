const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 8000

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/happy', require('./routes/happyRoutes'))

app.get('/', (req, res) => {
  res.send('Hey this works')
})

app.listen(port, () => console.log(`server is on port ${port}`))
