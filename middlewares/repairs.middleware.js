const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const Repairs = require('../models/repairs.model');

// exports.validRepairs = catchAsync(async (req, res, next) => {
//   const { id } = req.params;

//   const repairs = await Repairs.findOne({
//     where: {
//       id,
//       status: 'pending',
//     },
//   });

//   if (!repairs) {
//     return next(new AppError('The repair cite not found', 404));
//   }

//   req.repairs = repairs;
//   next();
// });

exports.validRepairs = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repairs = await Repairs.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repairs) {
    return res.status(404).json({
      status: 'error',
      message: `The repairs 'pending' not found`,
    });
  }

  req.repairs = repairs;
  next();
});
