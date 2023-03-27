const express = require('express');

const usersController = require('./../controllers/users.controller');
const usersMiddleware = require('../middlewares/users.middleware');

const router = express.Router();

router
  .route('/')
  .get(usersController.findAllUser)
  .post(usersController.createUser);

router
  .route('/:id')
  .get(usersMiddleware.validExistUser, usersController.findOneUser)
  .patch(usersMiddleware.validExistUser, usersController.updateUser)
  .delete(usersMiddleware.validExistUser, usersController.deleteUser);

module.exports = router;
