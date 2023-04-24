const express = require('express');

const repairsController = require('./../controllers/repairs.controller');

const repairsMiddleware = require('./../middlewares/repairs.middleware');
const userMiddleware = require('../middlewares/users.middleware');

const router = express.Router();

router.use(userMiddleware.protect);

router
  .route('/')
  .get(userMiddleware.restictTo('employee'), repairsController.findAllRepairs)
  .post(repairsController.createRepairs);

router
  .route('/:id')
  .get(
    repairsMiddleware.validRepairs,
    userMiddleware.restictTo('employee'),
    repairsController.findOneRepairs
  )
  .patch(
    repairsMiddleware.validRepairs,
    userMiddleware.restictTo('employee'),
    repairsController.updateRepairs
  )
  .delete(
    repairsMiddleware.validRepairs,
    userMiddleware.restictTo('employee'),
    repairsController.deleteRepairs
  );

module.exports = router;
