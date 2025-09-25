const AuthController = require('../Controllers/AuthController');
const express = require('express');
const router = express.Router();

// User Registration
router.post('/register', AuthController.postUserResigter);

module.exports = router;