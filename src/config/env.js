require('dotenv').config()

const env = {
  PORT: process.env.PORT,

  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOSTNAME: process.env.DB_HOSTNAME,

  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
}

module.exports = env
