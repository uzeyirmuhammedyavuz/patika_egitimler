const Category = require('../models/Category.js');

exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).redirect('/users/dashboard')
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    await Category.findOneAndDelete(req.params.id);
    res.status(200).redirect('/users/dashboard');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug });
    res.status(200).render('category', {
      category,
      page_name: 'category',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};
