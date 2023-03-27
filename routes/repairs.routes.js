const express = require('express');

const repairsController = require('./../controllers/repairs.controller');
const repairsMiddleware = require('./../middlewares/repairs.middleware');

const rout = express.Router();

rout
  .route('/')
  .get(repairsController.findAllRepairs)
  .post(repairsController.createRepairs);

rout
  .route('/:id')
  .get(repairsMiddleware.validRepairs, repairsController.findOneRepairs)
  .patch(repairsMiddleware.validRepairs, repairsController.updateRepairs)
  .delete(repairsMiddleware.validRepairs, repairsController.deleteRepairs);

module.exports = rout;
