require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require('./routes/auth')
const productRoutes = require('./routes/product')

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cors())

// Routes
app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)

// Start server
const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI
mongoose
  .connect(MONGODB_URI, {})
  .then(() => {
    console.log('MongoDB connected')
  })
  .catch((err) => console.error(err))
