const Repairs = require('../models/repairs.model');

exports.findAllRepairs = async (req, res) => {
  const repairs = await Repairs.findAll({
    where: {
      status: 'pending',
    },
  });
  res.status(200).json({
    status: 'sussess',
    message: 'Hello, your motorcycle is on the waiting list',
    repairs,
  });
};

exports.findOneRepairs = async (req, res) => {
  const { repairs } = req;

  res.status(200).json({
    message: 'Hello, your bike was successfully found',
    repairs,
  });
};

exports.createRepairs = async (req, res) => {
  const { date, userId } = req.body;

  const repairs = await Repairs.create({
    date,
    userId,
  });

  res.status(201).json({
    status: 'success',
    message: 'Your appointment has been created successfully',
    repairs,
  });
};

exports.updateRepairs = async (req, res) => {
  const { repairs } = req;
  const { status } = req.body;

  await repairs.update({ status: 'completed' });

  res.status(200).json({
    status: 'success',
    message: 'Your repair has been completed successfully',
    repairs,
  });
};

exports.deleteRepairs = async (req, res) => {
  const { repairs } = req;

  await repairs.update({ status: 'cancelled' });

  res.status(200).json({
    status: 'succes',
    message: 'The repair has been canceled',
  });
};