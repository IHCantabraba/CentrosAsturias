require('dotenv').config()
const express = require('express')
const { connect2DB } = require('./src/config/db')
const cors = require('cors')
const { cloudinaryConfig } = require('./src/config/cloudinary')
const centrosRouter = require('./src/api/router/centros')
const provinciasRouter = require('./src/api/router/provincias')
const usersRouter = require('./src/api/router/users')

const PORT = 3000

const app = express()

connect2DB()
cloudinaryConfig()

app.use(cors())
app.use(express.json())

app.use('/api/v1/centros', centrosRouter)
app.use('/api/v1/provincias', provinciasRouter)
app.use('/api/v1/users', usersRouter)
app.use('*', (req, res, next) => {
  return res.status(404).json(`Route not found`)
})
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`)
})
