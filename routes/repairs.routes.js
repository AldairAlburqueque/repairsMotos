const express = require('express');

const repairsController = require('./../controllers/repairs.controller');
const repairsMiddleware = require('./../middlewares/repairs.middleware');

const authMiddleware = require('../middlewares/auth.middleware');

const rout = express.Router();

rout.use(authMiddleware.protect);

rout
  .route('/')
  .get(authMiddleware.restictTo('employee'), repairsController.findAllRepairs)
  .post(repairsController.createRepairs);

rout
  .route('/:id')
  .get(
    repairsMiddleware.validRepairs,
    authMiddleware.restictTo('employee'),
    repairsController.findOneRepairs
  )
  .patch(
    repairsMiddleware.validRepairs,
    authMiddleware.restictTo('employee'),
    repairsController.updateRepairs
  )
  .delete(
    repairsMiddleware.validRepairs,
    authMiddleware.restictTo('employee'),
    repairsController.deleteRepairs
  );

module.exports = rout;
