const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/users',controller.getUsers);
router.get('/create-user',controller.addUser);
router.get('/update-user',controller.updateUser);
router.get('/delete-user',controller.deleteUser);

module.exports=router;