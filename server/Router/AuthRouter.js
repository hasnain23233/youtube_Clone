const AuthController = require('../Controllers/AuthController');
const express = require('express');
const router = express.Router();

// User Registration
router.post('/signup', AuthController.postUserResigter);

module.exports = router;