const express = require('express')
const connectDB = require('./config/db')
const env = require('./config/env')

const app = express()
const PORT = env.PORT

app.use(express.json())

connectDB()

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
)
