const User = require('../models/User')
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const env = require('../config/env')

class authCtrl {
  async register(req, res) {
    const { username, password } = req.body
    if (!username || !password)
      return res.status(400).json({
        success: false,
        message: 'Please enter your username or password',
      })

    try {
      const user = await User.findOne({ username })
      if (user)
        return res.status(400).json({
          success: false,
          message: 'Username already taken',
        })

      const hashPassword = await argon2.hash(password)
      const newUser = new User({ username, password: hashPassword })
      await newUser.save()

      const accessToken = jwt.sign(
        { userId: newUser._id },
        env.ACCESS_TOKEN_SECRET
      )
      return res.json({
        success: true,
        message: 'User created successfully',
        accessToken,
      })
    } catch (e) {
      console.log(e)
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      })
    }
  }
}

module.exports = new authCtrl()
