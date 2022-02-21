const Category = require('../models/Category')

class categoryCtrl {
  async createCategory(req, res) {
    const { name } = req.body
    if (!name)
      return res.status(400).json({
        success: false,
        message: 'Name is required',
      })

    try {
      const category = await Category.findOne({ name })
      if (category)
        return res.status(400).json({
          success: false,
          message: 'Category already exists',
        })

      const newCategory = new Category({ name })
      await newCategory.save()
      return res.json({
        success: true,
        message: 'Category created successfully',
        data: newCategory,
      })
    } catch (e) {
      console.log(error)
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      })
    }
  }
}

module.exports = new categoryCtrl()
