const authRouter = require('./auth')
const categoryRouter = require('./category')

const routes = (app) => {
  app.use('/api/auth', authRouter)
  app.use('/api/categories', categoryRouter)
}

module.exports = routes
