const AuthController = require('../Controllers/AuthController');
const express = require('express');
const router = express.Router();

// User Registration
router.post('/signup', AuthController.postUserResigter);

router.post('/login', AuthController.postUserLogin);

module.exports = router;