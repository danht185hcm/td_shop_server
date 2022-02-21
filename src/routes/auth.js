const express = require('express')
const router = express.Router()
const authCtrl = require('../controllers/authCtrl')

/**
 * @route POST api/auth/register
 * @dec Register user
 * @access public
 */
router.post('/register', authCtrl.register)

/**
 * @route POST api/auth/login
 * @dec Login user
 * @access public
 */
router.post('/login', authCtrl.login)

module.exports = router
