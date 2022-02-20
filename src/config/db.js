const mongoose = require('mongoose')
const env = require('./env')

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${env.DB_USERNAME}:${env.DB_PASSWORD}@td-shop.lplee.mongodb.net/${env.DB_HOSTNAME}?retryWrites=true&w=majority`
    )
    console.log('MongoDB connected')
  } catch (e) {
    console.log('MongoDB connection error: ' + e.message)
  }
}

module.exports = connectDB