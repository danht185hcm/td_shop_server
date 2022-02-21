const express = require('express')
const router = express.Router()
const categoryCtrl = require('../controllers/categoryCtrl')

/**
 * @route GET api/categories
 * @dec Get all categories
 * @access public
 */

/**
 * @route GET api/categories/:id
 * @dec Get category by id
 * @access public
 */

/**
 * @route POST api/categories
 * @dec Create a category
 * @access private
 */
router.post('/', categoryCtrl.createCategory)

/**
 * @route PATCH api/categories/:id
 * @dec Update category by id
 * @access private
 */

/**
 * @route DELETE api/categories/:id
 * @dec Delete category by id
 * @access private
 */

module.exports = router
