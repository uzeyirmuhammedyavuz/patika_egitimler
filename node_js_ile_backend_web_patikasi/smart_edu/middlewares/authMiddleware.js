const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const user = await User.findById(req.session.userID);
    if (!user) return res.redirect('/login');
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};
