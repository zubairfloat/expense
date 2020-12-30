const User = require('../models/user.model');
const userService = require('../service/user.service');
const extend = require('lodash/extend');

module.exports = {
  create: async (req, res, next) => {
    try {
      const newUser = new User(req.body);
      await userService.registerUser(newUser);
      res.status(201).json({
        success: true,
        message: 'Account is successfully created',
      });
    } catch (err) {
      res.status(400).json({
        success: false,
        msg: err.message,
      });
    }
  },
  list: async (req, res) => {
    try {
      const user = await userService.allUsers();
      res.json(user);
    } catch (err) {
      res.status(400).json({
        success: false,
        msg: err.message,
      });
    }
  },
  userByID: async (req, res, next, id) => {
    try {
      let user = await userService.userFindById(id);
      if (!user)
        return res.status('400').json({
          error: 'User not found',
        });
      req.profile = user;
      next();
    } catch (err) {
      res.status(400).json({
        success: false,
        msg: err.message,
      });
    }
  },
  read: async (req, res) => {
    try {
      req.profile.password = undefined;
      return res.json(req.profile);
    } catch (err) {
      res.status(400).json({
        success: false,
        msg: err.message,
      });
    }
  },
  update: async (req, res, next) => {
    try {
      let user = req.profile;
      user = extend(user, req.body);
      user.updated = Date.now();
      await user.save();
      user.password = undefined;
      res.json(user);
    } catch (err) {
      res.status(400).json({
        success: false,
        msg: err.message,
      });
    }
  },
  remove: async (req, res, next) => {
    try {
    } catch (err) {
      res.status(400).json({
        success: false,
        msg: err.message,
      });
    }
  },
};
