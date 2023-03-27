const Repairs = require('../models/repairs.model');

exports.validRepairs = async (req, res, next) => {
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
      message: `The repairs whith id ${id}  not found`,
    });
  }

  req.repairs = repairs;
  next();
};
