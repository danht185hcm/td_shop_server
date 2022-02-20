const express = require('express')
const env = require('./config/env')

const app = express()
const PORT = env.PORT

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
)
