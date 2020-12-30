const User = require('../models/user.model');

const registerUser = (newUser) => {
  return newUser.save();
};
const allUsers = () => {
  return User.find().select('name email updated created');
};
const userFindById = (id) => {
  return User.findById(id);
};
const userServices = {
  registerUser,
  allUsers,
  userFindById,
};
module.exports = userServices;
