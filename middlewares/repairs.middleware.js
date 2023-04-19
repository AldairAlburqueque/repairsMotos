const Repairs = require('../models/repairs.model');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.validRepairs = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repairs = await Repairs.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repairs) {
    return next(new AppError('User not found', 404));
  }

  req.repairs = repairs;
  next();
});
