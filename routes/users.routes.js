const express = require('express');

const usersController = require('./../controllers/users.controller');

const validMiddleware = require('../middlewares/validations.middleware');
const usersMiddleware = require('../middlewares/users.middleware');

const router = express.Router();

router
  .route('/')
  .get(usersMiddleware.protect, usersController.findAllUser)
  .post(validMiddleware.createUserValidation, usersController.createUser);

router.post(
  '/login',
  validMiddleware.loginUserValidation,
  usersController.login
);

router.use(usersMiddleware.protect);

router
  .route('/:id')
  .get(usersMiddleware.validExistUser, usersController.findOneUser)
  .patch(
    usersMiddleware.validExistUser,
    usersMiddleware.protectAccountOwner,
    usersController.updateUser
  )
  .delete(
    usersMiddleware.validExistUser,
    usersMiddleware.protectAccountOwner,
    usersController.deleteUser
  );

module.exports = router;
