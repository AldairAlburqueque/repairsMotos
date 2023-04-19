const express = require('express');

const usersController = require('./../controllers/users.controller');
const usersMiddleware = require('../middlewares/users.middleware');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router
  .route('/')
  .get(authMiddleware.protect, usersController.findAllUser)
  .post(usersController.createUser);

router.post('/login', usersController.login);

router.use(authMiddleware.protect);

router
  .route('/:id')
  .get(usersMiddleware.validExistUser, usersController.findOneUser)
  .patch(
    usersMiddleware.validExistUser,
    authMiddleware.protectAccountOwner,
    usersController.updateUser
  )
  .delete(
    usersMiddleware.validExistUser,
    authMiddleware.protectAccountOwner,
    usersController.deleteUser
  );

module.exports = router;
