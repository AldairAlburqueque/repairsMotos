const User = require('../models/users.model');

exports.findAllUser = async (req, res) => {
  const users = await User.findAll({
    where: {
      status: 'available',
    },
  });
  res.status(200).json({
    status: 'sussess',
    message: 'User was found successfully',
    results: users.length,
    users,
  });
};

exports.findOneUser = async (req, res) => {
  const { user } = req;

  res.status(200).json({
    status: 'success',
    message: 'The query has been done successfully',
    user,
  });
};

exports.createUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role,
  });

  res.status(200).json({
    status: 'success',
    message: 'Hello, a user has been created',
    user,
  });
};

exports.updateUser = async (req, res) => {
  const { user } = req;

  const { name, email } = req.body;

  await user.update({ name, email });

  res.status(200).json({
    status: 'success',
    message: 'The user has been updated',
    user,
  });
};

exports.deleteUser = async (req, res) => {
  const { user } = req;

  await user.update({ status: 'disavailable' });

  res.status(200).json({
    status: 'success',
    message: 'The user has been deleted',
  });
};
