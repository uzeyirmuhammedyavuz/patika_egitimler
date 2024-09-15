const Photo = require('../models/Photo');

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getAddPage = (req, res) => {
  res.render('add', { photo: null });
};

exports.getEditPage = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id);
    res.render('edit', { photo });
  } catch (error) {
    res.status(500).send(error);
  }
};
