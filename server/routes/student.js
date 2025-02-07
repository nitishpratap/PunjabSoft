const express = require('express');
const router = express.Router();
const controller = require('../controller/student');
router.get('/students',controller.findStudent);
module.exports = router;
