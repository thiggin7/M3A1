const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
router
.route('/')
.get(userController.getAllUsers)
.post(userController.createNewUser);
router
.route('/:id')
.get(userController.getUserByID)
.patch(userController.patchUserById)
.delete(userController.deleteUserByID);
module.exports = router;