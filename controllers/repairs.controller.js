const Repairs = require('../models/repairs.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.findAllRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repairs.findAll({
    where: {
      status: 'pending',
    },
  });
  res.status(200).json({
    status: 'sussess',
    message: 'Hello, your motorcycle is on the waiting list',
    results: repairs.length,
    repairs,
  });
});

exports.findOneRepairs = catchAsync(async (req, res) => {
  const { repairs } = req;

  res.status(200).json({
    message: 'Hello, your bike was successfully found',
    repairs,
  });
});

exports.createRepairs = catchAsync(async (req, res) => {
  const { date, motorsNumber, description, userId } = req.body;

  const repairs = await Repairs.create({
    date,
    motorsNumber,
    description,
    userId,
  });

  res.status(201).json({
    status: 'success',
    message: 'Your appointment has been created successfully',
    repairs,
  });
});

exports.updateRepairs = catchAsync(async (req, res) => {
  const { status } = req.body;
  const { repairs } = req;

  await repairs.update({ status: 'completed' });

  res.status(200).json({
    status: 'success',
    message: 'Your repair has been completed successfully',
    repairs,
  });
});

exports.deleteRepairs = catchAsync(async (req, res, next) => {
  const { repairs } = req;

  await repairs.update({ status: 'cancelled' });

  return res.status(200).json({
    status: 'success',
    message: 'The repair has been canceled',
  });
});
